const { readFileSync } = require('fs');

const { get } = require('./home');

let responseStub;

describe('GET /', () => {
    beforeEach(() => {
        responseStub = {
            statusCode: null,
            setHeader: jest.fn(),
            write: jest.fn(),
        };
    });
    it('should set the response status code to 200', async () => {
        await get({ response: responseStub });
        expect(responseStub.statusCode).toBe(200);
    });
    it('should set the Content-Type header to text/plain', async () => {
        await get({ response: responseStub });
        expect(responseStub.setHeader).toBeCalledWith('Content-Type', 'text/plain');
    });
    it('should write the project README as response body', async () => {
        const readme = readFileSync('README.md', 'utf-8')
        await get({ response: responseStub });
        expect(responseStub.write).toBeCalledWith(readme);
    });
});
