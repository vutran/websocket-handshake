# websocket-handshake

> Simple utility to generate a websocket handshake hash/response.

## Install

```bash
$ npm install --save websocket-handshake
```

## Usage

Import the module

```js
const { getResponseHash, getResponseHeaders } = require('websocket-handshake');
```

Create the handshake response hash

```js
const hash = getResponseHash('dGhlIHNhbXBsZSBub25jZQ==');
// => s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Create the handshake response headers

```js
const request = { ... }; // instance of http.ServerRequest
const headers = getResponseHeaders(request);
// => HTTP/1.1 101 Switching Protocols
//    Upgrade: websocket
//    Connection: Upgrade
//    Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## License

MIT © [Vu Tran](https://github.com/vutran/)
