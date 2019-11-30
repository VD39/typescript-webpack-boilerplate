/**
 * Will return message with passed in parameter.
 * @param {string} [name="You"]
 */
function setMessage(name = 'You') {
  return `Hello World and ${name}!`;
}

// eslint-disable-next-line import/prefer-default-export
export { setMessage };
