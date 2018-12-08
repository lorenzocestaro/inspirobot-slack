const { formatQuoteMessage } = require('../slack');
const inspirobot = require('../inspirobot');

const get = async ({ response }) => {
    const quoteUrl = await inspirobot.generateQuote();
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write(quoteUrl);
    return response;
};

const post = async ({ response }) => {
    const quoteUrl = await inspirobot.generateQuote();
    const body = formatQuoteMessage({ imageUrl: quoteUrl });
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(body));
    return response;
};

module.exports = {
    get,
    post,
};
