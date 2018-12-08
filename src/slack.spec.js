const { formatQuoteMessage } = require('./slack');

describe('Slack message formatter', () => {
    it('should return the formatted response with default text', () => {
        const message = formatQuoteMessage({ imageUrl: 'test_url' });
        expect(message).toEqual({
            attachments: [{ image_url: 'test_url' }],
            response_type: 'in_channel',
            text: 'Get inspired!',
        });
    });
    it('should return the formatted response with custom text', () => {
        const message = formatQuoteMessage({
            imageUrl: 'test_url',
            text: 'Custom message',
        });
        expect(message).toEqual({
            attachments: [{ image_url: 'test_url' }],
            response_type: 'in_channel',
            text: 'Custom message',
        });
    });
    it('should throw an error if image_url is empty', () => {
        expect(() => formatQuoteMessage({ image_url: '' })).toThrow(TypeError);
    });
    it.each([{}, 'test_url', { extra_param: 2 }, { text: 'Custom message' }])(
        'should throw an error if image_url is not supplied',
        input => {
            expect(() => formatQuoteMessage(input)).toThrow(TypeError);
        },
    );
});
