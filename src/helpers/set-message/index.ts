/**
 * Will return a welcome message using the `name` parameter.
 *
 * @param [name="You"] Any name.
 *
 * @return The welcome message.
 */
export function setMessage(name = 'You'): string {
  return `Hello World and ${name}!`;
}
