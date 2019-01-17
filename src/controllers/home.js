const get = async ({ response }) => {
    response.statusCode = 308;
    response.setHeader('Location', 'https://github.com/lorenzocestaro/inspirobot-slack');
};

module.exports = {
    get,
};
