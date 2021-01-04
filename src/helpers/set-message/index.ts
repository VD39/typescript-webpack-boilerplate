/**
 * Will return message with passed in parameter.
 * @param {string} [name="You"]
 */
export function setMessage(name = 'You'): string {
  return `Hello World and ${name}!`;
}
