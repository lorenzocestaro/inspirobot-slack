'use strict';

const https = require('https');

function generateQuote() {
    return new Promise((resolve, reject) => {
        const url = 'https://inspirobot.me/api?generate=true';
        let image_url = '';
        https
            .get(url, res => {
                res.on('data', chunk => {
                    image_url = image_url + chunk;
                });
                res.on('end', () => {
                    console.log(`Inspirobot responded with code: ${res.statusCode}`);
                    resolve(image_url);
                });
            })
            .on('error', reject);
    });
}

module.exports = {
    generateQuote,
};
