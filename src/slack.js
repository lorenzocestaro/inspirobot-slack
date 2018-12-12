function formatQuoteMessage({ imageUrl, text = 'Get inspired!' }) {
    if (!imageUrl){
        throw new TypeError('No image_url specified');
    }
    return {
        attachments: [{ image_url: imageUrl }],
        response_type: 'in_channel',
        text,
    };
}

module.exports = {
    formatQuoteMessage,
};
