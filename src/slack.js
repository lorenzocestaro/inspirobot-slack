'use strict';

function formatQuoteMessage({ image_url, text = 'Get inspired!' }) {
  return {
    attachments: [{ image_url }],
    response_type: 'in_channel',
    text,
  };
}

module.exports = {
  formatQuoteMessage,
};
