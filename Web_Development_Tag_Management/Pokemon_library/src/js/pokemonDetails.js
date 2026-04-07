import { getPokemonByNameOrId } from './pokemonData.js';
import { addFavorite, removeFavorite, isFavorite } from './favorites.js';
import { capitalizeWords } from './utils.mjs';

// This is the main function for the details page.
// It gets one Pokemon from the API and then sends it to the render function.
export default async function pokemonDetails(nameOrId) {
  const pokemon = await getPokemonByNameOrId(nameOrId);
  renderPokemonDetails(pokemon);
}

// This builds the HTML for the selected Pokemon.
function renderPokemonDetails(pokemon) {
  const container = document.querySelector('#pokemonDetails');

  // I try to use the official artwork first.
  // If that is missing, I fall back to the normal front sprite.
  const image = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  // These three lines loop through the API arrays and turn them into HTML pills/items.
  const types = pokemon.types
    .map((item) => `<span class="type-pill">${capitalizeWords(item.type.name)}</span>`)
    .join('');

  const stats = pokemon.stats
    .map((item) => `<span class="stat-item">${capitalizeWords(item.stat.name)}: ${item.base_stat}</span>`)
    .join('');

  const abilities = pokemon.abilities
    .map((item) => `<span class="ability-item">${capitalizeWords(item.ability.name)}</span>`)
    .join('');

  // If the Pokemon is already saved, I show the remove text.
  const favoriteText = isFavorite(pokemon.name) ? 'Remove Favorite' : 'Add Favorite';

  // Here I print the whole details section.
  container.innerHTML = `
    <a class="back-btn" href="/pokemon-list/index.html">Back to list</a>
    <div class="details-layout">
      <div class="details-image">
        <img src="${image}" alt="Image of ${pokemon.name}">
      </div>
      <div>
        <p class="pokemon-number">#${pokemon.id}</p>
        <h1>${capitalizeWords(pokemon.name)}</h1>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>

        <h3 class="section-title">Types</h3>
        <div class="types-row">${types}</div>

        <h3 class="section-title">Abilities</h3>
        <div class="abilities-list">${abilities}</div>

        <h3 class="section-title">Base Stats</h3>
        <div class="stats-list">${stats}</div>

        <button id="favoriteButton" class="favorite-btn">${favoriteText}</button>
      </div>
    </div>
  `;

  // This button toggles between add and remove favorite.
  document.querySelector('#favoriteButton').addEventListener('click', () => {
    if (isFavorite(pokemon.name)) {
      removeFavorite(pokemon.name);
      document.querySelector('#favoriteButton').textContent = 'Add Favorite';
    } else {
      addFavorite(pokemon);
      document.querySelector('#favoriteButton').textContent = 'Remove Favorite';
    }
  });
}
