'use strict';

const http = require('http');

const router = require('./router');

const PORT = process.env.PORT || 5000;

http.createServer(router).listen(PORT, () => {
  console.log(`server start at port ${PORT}`);
});
