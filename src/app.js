'use strict';

const router = require('./router');

const app = async (request, response) => {
    try {
        const handler = router.route(request);
        await handler({ request, response });
        response.statusCode = 200;
    } catch (error) {
        console.error(error);
        response.statusCode = 500;
        response.write(error.message);
    } finally {
        response.end();
    }
};

module.exports = app;
