import messages from '../messages';

describe('Messages', () => {
  it('should return a object with messages', () => {
    expect(messages).toHaveProperty('header');
    expect(messages.header).toHaveProperty('id');
    expect(messages.header).toHaveProperty('defaultMessage');
    expect(messages).toHaveProperty('error');
    expect(messages.error).toHaveProperty('id');
    expect(messages.error).toHaveProperty('defaultMessage');
  });
});
