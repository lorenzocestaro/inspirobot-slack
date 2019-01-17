const { get } = require('./home');

let responseStub;

describe('GET /', () => {
    beforeEach(() => {
        responseStub = {
            statusCode: null,
            setHeader: jest.fn(),
        };
    });
    it('should set the response status code to 308', async () => {
        await get({ response: responseStub });
        expect(responseStub.statusCode).toBe(308);
    });
    it('should set the Location header to the project GitHub page', async () => {
        await get({ response: responseStub });
        expect(responseStub.setHeader).toBeCalledWith(
            'Location',
            'https://github.com/lorenzocestaro/inspirobot-slack',
        );
    });
});
