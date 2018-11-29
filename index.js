'use strict';

const https = require('https');

const commands = require('./commands');


const requestHandler = async (request, response) => {
    const { method, url } = request;

    try {
        if (method === 'POST' && url === '/inspireme') {
            const message = await commands.inspireme();
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


https.createServer(requestHandler)
    .listen(5000, () => {console.log("server start at port 5000")});
