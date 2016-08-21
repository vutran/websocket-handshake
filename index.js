const crypto = require('crypto');

/**
 * Retrieve the handshake response hash
 *
 * @param {String} key
 * @return {String}
 */
const getResponseHash = key => {
  const secret = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
  const hash = crypto.createHash('sha1');
  hash.update(`${key}${secret}`);
  return hash.digest('base64');
};

/**
 * Handles the websocket upgrade request
 *
 * @param {http.ServerRequest} req
 * @return {String}
 */
const getResponseHeaders = req => {
  const key = req.headers['sec-websocket-key'];
  const acceptHash = getResponseHash(key);
  const headers = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${acceptHash}`,
  ];
  return headers.concat('', '').join('\r\n');
};

module.exports = {
  getResponseHash,
  getResponseHeaders,
};
