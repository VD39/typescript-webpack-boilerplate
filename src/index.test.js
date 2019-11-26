// Import index as app.
import app from './index';

// Get setMessage message function.
const setMessage = app.__get__('setMessage');
const name = 'John Doe';

test(`Set message to be Hello World and ${name}!`, () => {
  expect(setMessage()).toBe('Hello World and You!');
  expect(setMessage(name)).toBe(`Hello World and ${name}!`);
});
