'use strict';

const https = require('https')

function getImageUrl() {
    return new Promise((resolve, reject) => {
        const url = 'http://inspirobot.me/api?generate=true';
        let image_url = '';
        https.get(url, (res) => {
            res.on('data', (chunk) => { image_url = image_url + chunk });
            res.on('end', () => resolve(image_url));
        }).on("error", reject);
    });
}


function getMessage(image_url) {
    return {
        response_type: 'in_channel',
        text: 'Get inspired!',
        attachments: [{ image_url }],
    }
}

async function handle() {
    const image_url = await getImageUrl();
    return getMessage(image_url);
}


module.exports = handle;
