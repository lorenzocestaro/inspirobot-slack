'use strict';

function formatQuoteMessage({ image_url, text = 'Get inspired!' }) {
    if (Boolean(image_url)) {
        return {
            attachments: [{ image_url }],
            response_type: 'in_channel',
            text,
        };
    }
    throw new TypeError('No image_url specified');
}

module.exports = {
    formatQuoteMessage,
};
