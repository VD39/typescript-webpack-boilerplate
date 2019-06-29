/**
 * Will return message with passed in paramter.
 * @param {string} [name="You"]
 */
function setMessage(name = 'You') {
  return `Hello World and ${name}!`;
}

/**
 * Will find #root element and set HTML to "Hello World!".
 */
function editDom() {
  const root = document.getElementById('root'); // Get root element.
  if (root) {
    root.innerHTML = `<p>${setMessage()}</p>`; // Set html of the root element.
  }
}

editDom(); // Call editDom.
