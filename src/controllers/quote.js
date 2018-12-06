'use strict';

const { formatQuoteMessage } = require('../slack');
const inspirobot = require('../inspirobot');

const get = async ({ response }) => {
    const quoteUrl = await inspirobot.generateQuote();
    console.log('URL', quoteUrl);
    response.setHeader('Content-Type', 'text/plain');
    response.write(quoteUrl);
    return response;
};

const post = async ({ response }) => {
    const quoteUrl = await inspirobot.generateQuote();
    const body = formatQuoteMessage({ image_url: quoteUrl });
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(body));
    return response;
};

module.exports = {
    get,
    post,
};
