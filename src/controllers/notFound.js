const controller = ({ response }) => {
    response.statusCode = 404;
    response.write('Nothing to see here.');
};

module.exports = controller;
