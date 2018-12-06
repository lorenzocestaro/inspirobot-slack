'use strict';

const { formatQuoteMessage } = require('./slack');

describe('Slack message formatter', () => {
  it('Returns formatted message with default text', () => {
    const message = formatQuoteMessage({ image_url: 'test_url' });
    expect(message).toEqual({
      attachments: [{ image_url: 'test_url' }],
      response_type: 'in_channel',
      text: 'Get inspired!',
    });
  });
  it('Returns formatted message with custom text', () => {
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
  it('Throws error if image_url is not supplied', () => {
    expect(() => formatQuoteMessage({})).toThrow(TypeError);
    expect(() => formatQuoteMessage('test_url')).toThrow(TypeError);
    expect(() => formatQuoteMessage({ extra_param: 2 })).toThrow(TypeError);
    expect(() => formatQuoteMessage({ text: 'Custom message' })).toThrow(
      TypeError,
    );
  });
});
