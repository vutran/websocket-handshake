import test from 'ava';
import m from '.';

test('generates an upgrade handshake response hash', t => {
  const key = 'dGhlIHNhbXBsZSBub25jZQ==';
  const hash = m.getResponseHash(key);
  t.is(hash, 's3pPLMBiTxaQ9kYGzzhZRbK+xOo=');
});

test('generates an upgrade handshake response headers', t => {
  const req = {
    headers: {
      host: 'example.com:8000',
      upgrade: 'websocket',
      connection: 'upgrade',
      'sec-websocket-key': 'dGhlIHNhbXBsZSBub25jZQ==',
      'sec-websocket-version': 13,
    },
  };
  let expected = 'HTTP/1.1 101 Switching Protocols\r\n';
  expected += 'Upgrade: websocket\r\n';
  expected += 'Connection: Upgrade\r\n';
  expected += 'Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\r\n';
  expected += '\r\n';
  t.is(m.getResponseHeaders(req), expected);
});
