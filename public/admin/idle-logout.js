// =============================================================================
// Auto-Logout bei Inaktivität – gemeinsame Logik für /admin/ und /admin-log/
// =============================================================================
//   - 10 Minuten Inaktivität (User-Events: mousemove, keydown, click, scroll,
//     touchstart, visibilitychange).
//   - 30 Sekunden vor Logout erscheint ein Warning-Modal mit Countdown.
//   - User kann "Angemeldet bleiben" klicken → Timer reset.
//   - Sonst läuft Countdown ab → localStorage clear → page reload.
//   - BroadcastChannel synct Activity über alle offenen CMS-Tabs.
// =============================================================================

(function () {
  if (window.__idleLogoutInstalled) return;
  window.__idleLogoutInstalled = true;

  const IDLE_MS = 10 * 60 * 1000;        // 10 Min Total-Idle
  const WARN_BEFORE_MS = 30 * 1000;      // 30 Sek Warning vor Logout
  const CHANNEL_NAME = 'boxclub-cms-activity';

  let warnTimer = null;
  let logoutTimer = null;
  let countdownInt = null;
  let modal = null;
  let bc = null;

  try { bc = new BroadcastChannel(CHANNEL_NAME); } catch (_) {}

  function isLoggedIn() {
    for (const key of ['decap-cms-user', 'netlify-cms-user']) {
      try {
        const raw = localStorage.getItem(key);
        if (raw && JSON.parse(raw).token) return true;
      } catch (_) {}
    }
    return false;
  }

  function doLogout(reason) {
    try {
      localStorage.removeItem('decap-cms-user');
      localStorage.removeItem('netlify-cms-user');
    } catch (_) {}
    closeModal();
    // Broadcast damit andere Tabs auch reloaden
    if (bc) { try { bc.postMessage({ type: 'logout' }); } catch (_) {} }
    // Sofort weiterleiten
    window.location.href = '/admin/?reason=' + encodeURIComponent(reason || 'idle');
  }

  function ensureModalStyles() {
    if (document.getElementById('idle-logout-styles')) return;
    const s = document.createElement('style');
    s.id = 'idle-logout-styles';
    s.textContent = `
      .idle-overlay {
        position: fixed; inset: 0; z-index: 2147483647;
        background: rgba(11, 11, 15, 0.75);
        backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center;
        font-family: 'Inter', system-ui, sans-serif;
      }
      .idle-modal {
        background: #fff;
        border-top: 4px solid #FF6B00;
        max-width: 420px; width: calc(100% - 2rem);
        padding: 1.75rem 1.5rem 1.5rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      }
      .idle-modal h2 {
        margin: 0 0 0.5rem;
        font-family: 'Oswald', sans-serif;
        font-weight: 800;
        font-size: 1.4rem;
        color: #0B0B0F;
      }
      .idle-modal p {
        margin: 0 0 1rem;
        color: #555;
        font-size: 0.92rem;
        line-height: 1.5;
      }
      .idle-modal .countdown {
        font-size: 2.2rem;
        font-weight: 800;
        color: #FF6B00;
        margin: 0.5rem 0 1.25rem;
        font-variant-numeric: tabular-nums;
        text-align: center;
        font-family: 'Oswald', sans-serif;
      }
      .idle-modal .progress {
        height: 4px;
        background: #f0eeea;
        margin: 0 0 1.25rem;
        position: relative;
        overflow: hidden;
      }
      .idle-modal .progress-bar {
        position: absolute; inset: 0 100% 0 0;
        background: #FF6B00;
        transition: right 1s linear;
      }
      .idle-actions {
        display: flex; gap: 0.6rem;
      }
      .idle-btn {
        flex: 1;
        padding: 0.7rem 0.5rem;
        font-family: inherit;
        font-size: 0.82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        cursor: pointer;
        border: 1px solid transparent;
        transition: all 0.15s;
      }
      .idle-btn-primary {
        background: #FF6B00;
        color: #fff;
      }
      .idle-btn-primary:hover { background: #e25e00; }
      .idle-btn-secondary {
        background: transparent;
        border-color: #d6d3d1;
        color: #555;
      }
      .idle-btn-secondary:hover { background: #f5f5f4; }
    `;
    document.head.appendChild(s);
  }

  function showModal() {
    if (modal) return;
    ensureModalStyles();
    const overlay = document.createElement('div');
    overlay.className = 'idle-overlay';
    const initialSec = Math.round(WARN_BEFORE_MS / 1000);
    overlay.innerHTML = `
      <div class="idle-modal" role="alertdialog" aria-labelledby="idle-title">
        <h2 id="idle-title">Inaktivität erkannt</h2>
        <p>Du warst längere Zeit inaktiv. Aus Sicherheitsgründen wirst du in
          <strong><span id="idle-countdown-sec">${initialSec}</span> Sekunden</strong> automatisch abgemeldet.</p>
        <div class="countdown"><span id="idle-countdown-big">${initialSec}</span></div>
        <div class="progress"><div class="progress-bar" id="idle-progress"></div></div>
        <div class="idle-actions">
          <button type="button" class="idle-btn idle-btn-secondary" id="idle-logout-now">Jetzt abmelden</button>
          <button type="button" class="idle-btn idle-btn-primary" id="idle-stay">Angemeldet bleiben</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    modal = overlay;

    document.getElementById('idle-stay').addEventListener('click', () => {
      resetIdle('user-click');
    });
    document.getElementById('idle-logout-now').addEventListener('click', () => {
      doLogout('user-logout');
    });

    let remaining = WARN_BEFORE_MS / 1000;
    const $sec = document.getElementById('idle-countdown-sec');
    const $big = document.getElementById('idle-countdown-big');
    const $bar = document.getElementById('idle-progress');
    countdownInt = setInterval(() => {
      remaining -= 1;
      if ($sec) $sec.textContent = String(Math.max(remaining, 0));
      if ($big) $big.textContent = String(Math.max(remaining, 0));
      if ($bar) {
        const pct = ((WARN_BEFORE_MS / 1000 - remaining) / (WARN_BEFORE_MS / 1000)) * 100;
        $bar.style.right = (100 - pct) + '%';
      }
      if (remaining <= 0) {
        clearInterval(countdownInt);
      }
    }, 1000);
  }

  function closeModal() {
    if (modal) {
      modal.remove();
      modal = null;
    }
    if (countdownInt) {
      clearInterval(countdownInt);
      countdownInt = null;
    }
  }

  function clearTimers() {
    if (warnTimer) { clearTimeout(warnTimer); warnTimer = null; }
    if (logoutTimer) { clearTimeout(logoutTimer); logoutTimer = null; }
  }

  function startTimers() {
    clearTimers();
    if (!isLoggedIn()) return;
    warnTimer = setTimeout(() => {
      if (!isLoggedIn()) return;
      showModal();
      logoutTimer = setTimeout(() => {
        doLogout('idle-timeout');
      }, WARN_BEFORE_MS);
    }, IDLE_MS - WARN_BEFORE_MS);
  }

  function resetIdle(source) {
    closeModal();
    startTimers();
    if (bc && source !== 'broadcast') {
      try { bc.postMessage({ type: 'activity', t: Date.now() }); } catch (_) {}
    }
  }

  // Aktivitäts-Erkennung
  const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'click', 'visibilitychange'];
  let lastReset = 0;
  function onActivity() {
    // Throttle: max 1x pro Sekunde
    const now = Date.now();
    if (now - lastReset < 1000) return;
    lastReset = now;
    if (!modal) resetIdle('local');
  }
  for (const ev of events) {
    window.addEventListener(ev, onActivity, { passive: true });
  }

  // Activity & Logout-Sync zwischen Tabs
  if (bc) {
    bc.addEventListener('message', (e) => {
      if (!e.data) return;
      if (e.data.type === 'logout') {
        try {
          localStorage.removeItem('decap-cms-user');
          localStorage.removeItem('netlify-cms-user');
        } catch (_) {}
        window.location.href = '/admin/?reason=remote-logout';
      } else if (e.data.type === 'activity') {
        resetIdle('broadcast');
      }
    });
  }

  // Initial starten wenn eingeloggt
  startTimers();

  // Falls Login erst im Laufenden geschieht (Decap macht das im Popup-Callback)
  setInterval(() => {
    if (isLoggedIn() && !warnTimer && !logoutTimer && !modal) {
      startTimers();
    } else if (!isLoggedIn() && (warnTimer || logoutTimer)) {
      clearTimers();
      closeModal();
    }
  }, 3000);

  // Expose für Debug
  window.__resetIdle = resetIdle;
})();
