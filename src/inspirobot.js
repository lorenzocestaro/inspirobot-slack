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
                    console.log(`Inspirobot responded with code: ${res.statusCode}`);
                    resolve(imageUrl);
                });
            })
            .on('error', reject);
    });
}

module.exports = {
    generateQuote,
};
