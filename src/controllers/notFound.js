const controller = ({ response }) => {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Nothing to see here.');
};

module.exports = controller;
