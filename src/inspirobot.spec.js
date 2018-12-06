const nock = require('nock');

const { generateQuote } = require('./inspirobot');

describe('Inspirobot quote url generation', () => {
    it('should return a generated URL', async () => {
        nock('https://inspirobot.me')
            .get('/api?generate=true')
            .reply(200, 'generated_url');
        await generateQuote().then(res => expect(res).toBe('generated_url'));
    });
});
