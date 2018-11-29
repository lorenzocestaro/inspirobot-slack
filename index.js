'use strict';

const http = require('http');

const commands = require('./commands');

const PORT = process.env.PORT || 5000


const requestHandler = async (request, response) => {
    const { method, url } = request;
    console.log('REQ', method, url);

    try {
        if (method === 'POST' && url === '/inspireme') {
            const message = await commands.inspireme();
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify(message));
        } else {
            response.write('Nothing to see here');
        }
    } catch (error) {
        console.error(error);
        response.status(500)
        response.write(error.message)
    } finally {
        response.end();
    }
};


http.createServer(requestHandler)
    .listen(PORT, () => {console.log(`server start at port ${PORT}`)});
