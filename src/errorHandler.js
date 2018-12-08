const errorHandler = ({ error, response }) => {
    console.error(error);
    response.statusCode = 500;
    response.write(error.message);
};

module.exports = errorHandler;
