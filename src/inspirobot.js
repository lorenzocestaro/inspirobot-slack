'use strict';

const http = require('http');

function generateQuote() {
  return new Promise((resolve, reject) => {
    const url = 'http://inspirobot.me/api?generate=true';
    let image_url = '';
    http
      .get(url, res => {
        res.on('data', chunk => {
          image_url = image_url + chunk;
        });
        res.on('end', () => resolve(image_url));
      })
      .on('error', reject);
  });
}

module.exports = {
  generateQuote,
};
