'use strict';

const https = require('https');

const commands = require('./commands');

const PORT = process.env.PORT || 5000


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
    .listen(PORT, () => {console.log(`server start at port ${PORT}`)});
