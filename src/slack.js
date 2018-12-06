function formatQuoteMessage({ imageUrl, text = 'Get inspired!' }) {
    if (imageUrl) {
        return {
            attachments: [{ image_url: imageUrl }],
            response_type: 'in_channel',
            text,
        };
    }
    throw new TypeError('No image_url specified');
}

module.exports = {
    formatQuoteMessage,
};
