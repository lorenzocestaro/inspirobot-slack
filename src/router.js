'use strict';

const { home, notFound, quote } = require('./controllers');

const routingTable = {
    '/': {
        GET: home.get,
    },
    '/quote': {
        GET: quote.get,
        POST: quote.post,
    },
};

const route = ({ method, url }) => {
    return (routingTable[url] && routingTable[url][method]) || notFound;
};

module.exports = { route };
