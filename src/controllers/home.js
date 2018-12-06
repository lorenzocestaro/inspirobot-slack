'use strict';

const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const get = async ({ response }) => {
    const readme = await readFile('README.md');
    response.setHeader('Content-Type', 'text/plain');
    response.write(readme);
};

module.exports = {
    get,
};
