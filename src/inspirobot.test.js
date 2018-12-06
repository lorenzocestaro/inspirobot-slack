'use strict';

const nock = require('nock');

const { generateQuote } = require('./inspirobot');

describe('Inspirobot quote url generation', () => {
  it('Returns a generated URL', async () => {
    nock('http://inspirobot.me')
      .get('/api?generate=true')
      .reply(200, 'generated_url');
    await generateQuote().then(res => expect(res).toBe('generated_url'));
  });
});
