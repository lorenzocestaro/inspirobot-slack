'use strict';

const inspirobot = require('./inspirobot');
const slack = require('./slack');

const requestHandler = async (request, response) => {
  const { method, url } = request;

  try {
    if (method === 'GET' && url === '/quote') {
      const quoteUrl = await inspirobot.generateQuote();
      response.write(quoteUrl);
    } else if (method === 'POST' && url === '/quote') {
      const quoteUrl = await inspirobot.generateQuote();
      const body = slack.formatQuoteMessage({ image_url: quoteUrl });
      response.setHeader('Content-Type', 'application/json');
      response.write(JSON.stringify(body));
    } else {
      response.write('Nothing to see here');
    }
  } catch (error) {
    console.error(error);
    response.status(500);
    response.write(error.message);
  } finally {
    response.end();
  }
};

module.exports = requestHandler;
