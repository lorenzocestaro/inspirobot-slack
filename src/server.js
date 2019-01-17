const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 80;

http.createServer(app).listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
});
