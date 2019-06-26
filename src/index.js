/**
 * Will find #root element and set HTML to "Hello World!".
 */
const name = 'John Doe';
const editDom = () => {
  const root = document.getElementById('root'); // Get root element.
  root.innerHTML = `Hello World and ${name}!`; // Set html of the root element.
};

editDom(); // Call editDom.
