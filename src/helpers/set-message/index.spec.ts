// Import setMessage.
import { setMessage } from './index';

describe('setMessage', () => {
  describe.each([
    [undefined, 'Hello World and You!'],
    ['John Doe', 'Hello World and John Doe!'],
    ['Jane Doe', 'Hello World and Jane Doe!'],
  ])('with %s as name', (name: string | undefined, expectedValue: string) => {
    it('sets message correctly', () => {
      const message = setMessage(name);
      expect(message).toBe(expectedValue);
    });
  });
});
