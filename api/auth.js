// =============================================================================
// Decap CMS OAuth-Proxy – Schritt 1: Redirect zu GitHub
// =============================================================================
// Decap-Frontend öffnet diese Route in einem Popup mit
//   /api/auth?provider=github&site_id=...&scope=repo
// Wir leiten direkt an GitHubs OAuth-Authorize weiter. Nach erfolgreichem Login
// schickt GitHub den Browser zurück an /api/callback?code=...
// =============================================================================

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('OAuth-Server fehlt: OAUTH_GITHUB_CLIENT_ID nicht gesetzt.');
    return;
  }

  const scope = (req.query.scope || 'repo').toString();

  // CSRF-Schutz: zufaelliger State, zum Verify im Callback
  const state =
    (globalThis.crypto?.randomUUID && globalThis.crypto.randomUUID()) ||
    Math.random().toString(36).slice(2) + Date.now().toString(36);

  // Host aus Request ableiten (auch wenn Custom-Domain spaeter dazukommt)
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const redirectUri = `${proto}://${host}/api/callback`;

  // State als HttpOnly-Cookie, 10 Minuten gueltig
  res.setHeader(
    'Set-Cookie',
    `decap_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
  );

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
    state,
    allow_signup: 'false',
  });

  res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` });
  res.end();
}
