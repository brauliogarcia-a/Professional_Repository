import { loadHeaderFooter, capitalizeWords } from './utils.mjs';
import { getTypeList } from './pokemonData.js';

// This starts the home page.
async function init() {
  await loadHeaderFooter();
  setupSearch();
  await loadTypeButtons();
}

// This controls the search form on the home page.
function setupSearch() {
  const form = document.querySelector('#searchForm');
  const input = document.querySelector('#searchInput');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchValue = input.value.trim();
    if (!searchValue) return;

    // I send the user to the details page using the value typed in the search box.
    window.location.href = `/pokemon-details/index.html?pokemon=${encodeURIComponent(searchValue.toLowerCase())}`;
  });
}

// This loads a few type buttons on the home page.
async function loadTypeButtons() {
  const typeContainer = document.querySelector('#typeButtons');
  if (!typeContainer) return;

  const types = await getTypeList();
  const firstEightTypes = types.slice(0, 8);

  typeContainer.innerHTML = firstEightTypes
    .map((type, index) => {
      const extraClass = index % 2 === 0 ? '' : 'alt';
      return `<a class="type-button ${extraClass}" href="/pokemon-list/index.html?type=${type.name}">${capitalizeWords(type.name)}</a>`;
    })
    .join('');
}

init();
