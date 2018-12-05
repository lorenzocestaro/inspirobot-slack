'use strict';

const http = require('http');

const requestHandler = require('./request.handler');

const PORT = process.env.PORT || 5000;

http.createServer(requestHandler).listen(PORT, () => {
  console.log(`server start at port ${PORT}`);
});
