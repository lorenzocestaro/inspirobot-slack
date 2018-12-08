const notFound = require('./notFound');

let responseStub;

describe('Not found handler', () => {
    beforeEach(() => {
        responseStub = {
            statusCode: null,
            setHeader: jest.fn(),
            write: jest.fn(),
        };
    });
    it('should set the response status code to 404', async () => {
        await notFound({ response: responseStub });
        expect(responseStub.statusCode).toBe(404);
    });
    it('should set the Content-Type header to text/plain', async () => {
        await notFound({ response: responseStub });
        expect(responseStub.setHeader).toBeCalledWith('Content-Type', 'text/plain');
    });
    it('should write Nothing to see here. as response body', async () => {
        await notFound({ response: responseStub });
        expect(responseStub.write).toBeCalledWith('Nothing to see here.');
    });
});
