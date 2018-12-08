const errorHandler = require('./errorHandler');
const router = require('./router');

const app = async (request, response) => {
    try {
        const handler = router.route(request);
        await handler({ request, response });
    } catch (error) {
        errorHandler({ error, response });
    } finally {
        response.end();
    }
};

module.exports = app;
