'use strict';

const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 5000;

http.createServer(app).listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
});
