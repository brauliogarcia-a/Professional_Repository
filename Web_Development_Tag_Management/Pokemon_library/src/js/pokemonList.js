import { getPokemonByNameOrId } from './pokemonData.js';
import { renderListWithTemplate, capitalizeWords } from './utils.mjs';

// This creates the HTML for one Pokemon card in the list page.
function pokemonCardTemplate(pokemon) {
  const image = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
  const types = pokemon.types
    .map((item) => `<span class="type-pill">${capitalizeWords(item.type.name)}</span>`)
    .join('');

  return `
    <li class="pokemon-card">
      <a href="/pokemon-details/index.html?pokemon=${pokemon.name}">
        <img src="${image}" alt="Image of ${pokemon.name}">
        <p class="pokemon-number">#${pokemon.id}</p>
        <h2>${capitalizeWords(pokemon.name)}</h2>
        <div class="types-row">${types}</div>
      </a>
    </li>
  `;
}

// This sorts the Pokemon list depending on the selected option.
function sortPokemon(list, sortOption) {
  const sortedList = [...list];

  if (sortOption === 'name-asc') {
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'name-desc') {
    sortedList.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption === 'id-asc') {
    sortedList.sort((a, b) => a.id - b.id);
  } else if (sortOption === 'id-desc') {
    sortedList.sort((a, b) => b.id - a.id);
  }

  return sortedList;
}

// This is the main render function for the list page.
// selector = where I want to render.
// pokemonReferences = basic Pokemon objects with names/urls.
// sortOption = selected sorting mode.
export default async function renderPokemonList(selector, pokemonReferences, sortOption = 'default') {
  const parent = document.querySelector(selector);

  // The list from the API is basic, so here I request full details for each Pokemon.
  const detailsList = await Promise.all(
    pokemonReferences.map((pokemon) => getPokemonByNameOrId(pokemon.name))
  );

  const sortedList = sortPokemon(detailsList, sortOption);
  renderListWithTemplate(pokemonCardTemplate, parent, sortedList);
}
