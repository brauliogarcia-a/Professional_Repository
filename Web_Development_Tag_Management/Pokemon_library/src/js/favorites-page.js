import { loadHeaderFooter, capitalizeWords } from './utils.mjs';
import { getFavorites, removeFavorite } from './favorites.js';

// This starts the favorites page.
async function init() {
  await loadHeaderFooter();
  renderFavorites();
}

// This prints all saved favorite Pokemon.
function renderFavorites() {
  const parent = document.querySelector('#favoriteList');
  const favorites = getFavorites();

  // If the user has no favorites, I show an empty message.
  if (!favorites.length) {
    parent.innerHTML = '<li class="empty-message">There are no favorite Pokemon saved yet.</li>';
    return;
  }

  // I build the HTML for each saved Pokemon.
  parent.innerHTML = favorites.map((pokemon) => {
    const typeHtml = pokemon.types
      .map((type) => `<span class="type-pill">${capitalizeWords(type)}</span>`)
      .join('');

    return `
      <li class="pokemon-card">
        <a href="/pokemon-details/index.html?pokemon=${pokemon.name}">
          <img src="${pokemon.image}" alt="Image of ${pokemon.name}">
          <p class="pokemon-number">#${pokemon.id}</p>
          <h2>${capitalizeWords(pokemon.name)}</h2>
        </a>
        <div class="types-row">${typeHtml}</div>
        <button class="favorite-btn remove-button" data-name="${pokemon.name}">Remove</button>
      </li>
    `;
  }).join('');

  // After printing the buttons, I add the click event to each remove button.
  document.querySelectorAll('.remove-button').forEach((button) => {
    button.addEventListener('click', () => {
      removeFavorite(button.dataset.name);
      renderFavorites();
    });
  });
}

init();
