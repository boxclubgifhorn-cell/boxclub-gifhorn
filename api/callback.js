// =============================================================================
// Decap CMS OAuth-Proxy – Schritt 2: GitHub-Callback → Token-Exchange → postMessage
// =============================================================================

export default async function handler(req, res) {
  try {
    const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
    const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return sendErrorHtml(res, 'OAuth-Server fehlt: GitHub-Credentials nicht gesetzt.');
    }

    const query = req.query || {};
    const code = query.code;
    const state = query.state;
    const oauthError = query.error;
    const errorDesc = query.error_description;

    if (oauthError) {
      return sendErrorHtml(res, oauthError + ': ' + (errorDesc || ''));
    }
    if (!code) {
      return sendErrorHtml(res, 'Kein Authorization-Code von GitHub erhalten.');
    }

    // CSRF-Check: State aus Cookie vs URL
    const cookieHeader = req.headers.cookie || '';
    let stateCookie = null;
    const parts = cookieHeader.split(';');
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i].trim();
      if (p.indexOf('decap_oauth_state=') === 0) {
        stateCookie = p.substring('decap_oauth_state='.length);
        break;
      }
    }

    if (!stateCookie || stateCookie !== state) {
      return sendErrorHtml(res, 'State-Mismatch (CSRF-Schutz). Bitte erneut anmelden.');
    }

    // Code -> Access-Token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    const data = await tokenRes.json();
    if (data.error) {
      return sendErrorHtml(res, 'GitHub: ' + (data.error_description || data.error));
    }
    const token = data.access_token;
    if (!token) {
      return sendErrorHtml(res, 'GitHub hat keinen Access-Token zurueckgegeben.');
    }

    // State-Cookie loeschen
    res.setHeader(
      'Set-Cookie',
      'decap_oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
    );

    // HTML mit Decap-postMessage-Protokoll (Standard von decap-cms-oauth-provider-node)
    const payload = JSON.stringify({ token: token, provider: 'github' });
    // Encode for safe embedding: escape backslash, quotes, slashes (closing script tags)
    const safePayload = payload
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/</g, '\\u003C')
      .replace(/>/g, '\\u003E');

    const html =
      '<!doctype html><html lang="de"><head><meta charset="utf-8"/>' +
      '<title>Authentifizierung</title>' +
      '<style>body{font-family:system-ui,sans-serif;padding:2rem;text-align:center;color:#555}</style>' +
      '</head><body>' +
      '<p>Anmeldung erfolgreich. Fenster schliesst sich&hellip;</p>' +
      '<script>(function(){' +
      'var payload="' + safePayload + '";' +
      'function receiveMessage(e){' +
      'window.opener.postMessage("authorization:github:success:"+payload,e.origin);' +
      'window.removeEventListener("message",receiveMessage,false);' +
      '}' +
      'window.addEventListener("message",receiveMessage,false);' +
      'window.opener.postMessage("authorizing:github","*");' +
      '})();</script>' +
      '</body></html>';

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (e) {
    console.error('OAuth-Callback-Fehler:', e);
    return sendErrorHtml(
      res,
      'Unerwarteter Fehler: ' + (e && e.message ? e.message : String(e)),
    );
  }
}

function sendErrorHtml(res, message) {
  const safe = String(message).replace(/[<>]/g, function (c) {
    return c === '<' ? '&lt;' : '&gt;';
  });
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res
    .status(400)
    .send(
      '<!doctype html><html lang="de"><head><meta charset="utf-8"/>' +
        '<title>OAuth-Fehler</title></head>' +
        '<body style="font-family:system-ui,sans-serif;padding:2rem;color:#b00">' +
        '<h1>Login fehlgeschlagen</h1>' +
        '<p>' + safe + '</p>' +
        '<p><a href="/admin/">Zurueck zum Admin</a></p>' +
        '</body></html>',
    );
}
