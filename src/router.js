'use strict';

const inspirobot = require('./inspirobot');
const slack = require('./slack');

const routingTable = {
  quote: {
    GET: async ({ response }) => {
      const quoteUrl = await inspirobot.generateQuote();
      response.setHeader('Content-Type', 'text/plain');
      response.write(quoteUrl);
    },
    POST: async ({ response }) => {
      const quoteUrl = await inspirobot.generateQuote();
      const body = slack.formatQuoteMessage({ image_url: quoteUrl });
      response.setHeader('Content-Type', 'application/json');
      response.write(JSON.stringify(body));
    },
  },
  notFound: ({ response }) => response.write('Nothing to see here.'),
};

const router = async (request, response) => {
  const { method, url } = request;
  const route = url.slice(1);

  try {
    const handler =
      (routingTable[route] && routingTable[route][method]) ||
      routingTable.notFound;
    await handler({ request, response });
  } catch (error) {
    console.error(error);
    response.status(500);
    response.write(error.message);
  } finally {
    response.end();
  }
};

module.exports = router;
