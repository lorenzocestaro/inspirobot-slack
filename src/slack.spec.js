const { formatQuoteMessage } = require('./slack');

describe('Slack message formatter', () => {
    it('should return teh formatted response with default text', () => {
        const message = formatQuoteMessage({ image_url: 'test_url' });
        expect(message).toEqual({
            attachments: [{ image_url: 'test_url' }],
            response_type: 'in_channel',
            text: 'Get inspired!',
        });
    });
    it('should return teh formatted response with custom text', () => {
        const message = formatQuoteMessage({
            image_url: 'test_url',
            text: 'Custom message',
        });
        expect(message).toEqual({
            attachments: [{ image_url: 'test_url' }],
            response_type: 'in_channel',
            text: 'Custom message',
        });
    });
    it('should throw an error if image_url is not supplied', () => {
        expect(() => formatQuoteMessage({})).toThrow(TypeError);
        expect(() => formatQuoteMessage('test_url')).toThrow(TypeError);
        expect(() => formatQuoteMessage({ extra_param: 2 })).toThrow(TypeError);
        expect(() => formatQuoteMessage({ text: 'Custom message' })).toThrow(TypeError);
    });
    it('should throw an error if image_url is empty', () => {
        expect(() => formatQuoteMessage({ image_url: '' })).toThrow(TypeError);
    });
});
