const https = require('https');

function generateQuote() {
    return new Promise((resolve, reject) => {
        const url = 'https://inspirobot.me/api?generate=true';
        let imageUrl = '';
        https
            .get(url, res => {
                res.on('data', chunk => {
                    imageUrl += chunk;
                });
                res.on('end', () => {
                    console.log(`Inspirobot response: ${res.statusCode} ${imageUrl}`);
                    resolve(imageUrl);
                });
            })
            .on('error', reject);
    });
}

module.exports = {
    generateQuote,
};
