const errorHandler = require('./errorHandler');

const errorStub = Error('test error');

console.error = jest.fn();

let responseStub;

describe('App error handler', () => {
    beforeEach(() => {
        responseStub = {
            statusCode: null,
            write: jest.fn(),
        };
    });
    it('should log the error to console', () => {
        errorHandler({ error: errorStub, response: responseStub });
        expect(console.error).toBeCalled();
    });
    it('should write the error message as response content', () => {
        errorHandler({ error: errorStub, response: responseStub });
        expect(responseStub.write).toBeCalledWith(errorStub.message);
    });
    it('should set the response statusCode to 500', () => {
        errorHandler({ error: errorStub, response: responseStub });
        expect(responseStub.statusCode).toBe(500);
    });
});
