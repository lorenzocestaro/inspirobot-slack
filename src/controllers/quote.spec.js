const nock = require('nock');

const { get, post } = require('./quote');

let responseStub;

describe('GET /', () => {
    beforeEach(() => {
        responseStub = {
            statusCode: null,
            setHeader: jest.fn(),
            write: jest.fn(),
        };
        nock('https://inspirobot.me')
            .get('/api?generate=true')
            .reply(200, 'generated_url');
    });
    it('should set the response status code to 200', async () => {
        await get({ response: responseStub });
        expect(responseStub.statusCode).toBe(200);
    });
    it('should set the Content-Type header to text/plain', async () => {
        await get({ response: responseStub });
        expect(responseStub.setHeader).toBeCalledWith('Content-Type', 'text/plain');
    });
    it('should write the generated url as response body', async () => {
        await get({ response: responseStub });
        expect(responseStub.write).toBeCalledWith('generated_url');
    });
});

describe('POST /', () => {
    beforeEach(() => {
        responseStub = {
            statusCode: null,
            setHeader: jest.fn(),
            write: jest.fn(),
        };
        nock('https://inspirobot.me')
            .get('/api?generate=true')
            .reply(200, 'generated_url');
    });
    it('should set the response status code to 200', async () => {
        await post({ response: responseStub });
        expect(responseStub.statusCode).toBe(200);
    });
    it('should set the Content-Type header to application/json', async () => {
        await post({ response: responseStub });
        expect(responseStub.setHeader).toBeCalledWith('Content-Type', 'application/json');
    });
    it('should write a slack response as response body', async () => {
        await post({ response: responseStub });
        expect(responseStub.write).toBeCalledWith(JSON.stringify({
            attachments: [{ image_url: 'generated_url' }],
            response_type: 'in_channel',
            text: 'Get inspired!',
        }));
    });
});
