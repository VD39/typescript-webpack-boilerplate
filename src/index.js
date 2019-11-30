// Import helpers.
import { setMessage } from '@/helpers/set-message';

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
