const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const get = async ({ response }) => {
    const readme = await readFile('README.md', 'utf-8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/markdown');
    response.write(readme);
};

module.exports = {
    get,
};
