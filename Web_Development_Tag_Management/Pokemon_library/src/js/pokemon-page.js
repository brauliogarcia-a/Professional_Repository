import { loadHeaderFooter, getParam } from './utils.mjs';
import pokemonDetails from './pokemonDetails.js';

// This starts the details page.
async function init() {
  await loadHeaderFooter();

  // I read the pokemon name from the URL.
  const pokemonName = getParam('pokemon');

  // If there is no pokemon in the URL, I show a simple message.
  if (!pokemonName) {
    document.querySelector('#pokemonDetails').innerHTML = '<p class="empty-message">No pokemon was selected.</p>';
    return;
  }

  try {
    await pokemonDetails(pokemonName);
  } catch (error) {
    // If the API fails or the pokemon does not exist, I show a friendly error.
    document.querySelector('#pokemonDetails').innerHTML = `
      <div class="empty-message">
        <h2>Pokemon not found</h2>
        <p>I tried to load this pokemon, but the API did not return a valid result.</p>
      </div>
    `;
  }
}

init();
