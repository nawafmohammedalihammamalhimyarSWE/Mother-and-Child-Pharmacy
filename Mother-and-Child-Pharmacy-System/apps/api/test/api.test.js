const assert = require('node:assert/strict');
const { after, before, test } = require('node:test');
const app = require('../src/index');

let baseUrl;
let server;
before(async () => new Promise((resolve) => {
  server = app.listen(0, '127.0.0.1', () => {
    baseUrl = `http://127.0.0.1:${server.address().port}`;
    resolve();
  });
}));
after(async () => new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve())));

test('health endpoint returns status and security headers', async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(body.status, 'ok');
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(response.headers.get('x-frame-options'), 'DENY');
  assert.equal(response.headers.get('x-powered-by'), null);
});

test('dashboard endpoint returns the expected contract', async () => {
  const response = await fetch(`${baseUrl}/api/dashboard`);
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(typeof body.summary.totalProducts, 'number');
  assert.ok(Array.isArray(body.priorities));
});

test('unknown API endpoints return a JSON 404', async () => {
  const response = await fetch(`${baseUrl}/api/does-not-exist`);
  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: 'API endpoint not found' });
});

test('cross-origin access is disabled by default', async () => {
  const response = await fetch(`${baseUrl}/api/dashboard`, { headers: { Origin: 'https://untrusted.example' } });
  assert.equal(response.headers.get('access-control-allow-origin'), null);
});
