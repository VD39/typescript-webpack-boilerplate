// Import setMessage.
import { setMessage } from './index';

describe('setMessage', () => {
  describe.each([
    [undefined, 'Hello World and You!'],
    ['John Doe', 'Hello World and John Doe!'],
    ['Jane Doe', 'Hello World and Jane Doe!'],
  ])('With %s as name', (name, expectedValue) => {
    it('Set message correctly', () => {
      const message = setMessage(name);
      expect(message).toBe(expectedValue);
    });
  });
});
