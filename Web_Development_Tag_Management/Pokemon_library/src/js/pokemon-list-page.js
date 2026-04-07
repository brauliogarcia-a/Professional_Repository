import { loadHeaderFooter } from './utils.mjs';
import { getPokemonFullList, getTypeList, getPokemonByType } from './pokemonData.js';
import renderPokemonList from './pokemonList.js';

// This starts the Pokemon list page.
async function init() {
  await loadHeaderFooter();
  setupSearch();
  await loadTypeSelect();
  await loadPageData();
}

// This controls the search bar on the list page.
function setupSearch() {
  const form = document.querySelector('#searchForm');
  const input = document.querySelector('#searchInput');

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchValue = input.value.trim();
    if (!searchValue) return;

    window.location.href = `/pokemon-details/index.html?pokemon=${encodeURIComponent(searchValue.toLowerCase())}`;
  });
}

// This loads all available Pokemon types into the dropdown filter.
async function loadTypeSelect() {
  const select = document.querySelector('#typeFilter');
  const types = await getTypeList();

  select.innerHTML += types
    .map((type) => `<option value="${type.name}">${type.name}</option>`)
    .join('');
}

// This controls the list page data, filters, sorting, and message.
async function loadPageData() {
  const params = new URLSearchParams(window.location.search);
  const typeFromUrl = params.get('type') || 'all';
  const typeSelect = document.querySelector('#typeFilter');
  const sortSelect = document.querySelector('#sortPokemon');

  // If the URL already has a type, I set the select to match it.
  typeSelect.value = typeFromUrl;

  async function renderCurrentState() {
    const currentType = typeSelect.value;
    const currentSort = sortSelect.value;
    const message = document.querySelector('#resultsMessage');

    let pokemonReferences = [];

    if (currentType === 'all') {
      pokemonReferences = await getPokemonFullList();
      message.textContent = 'Showing first generation Pokemon for a faster student project demo.';
    } else {
      pokemonReferences = await getPokemonByType(currentType);
      message.textContent = `Showing Pokemon with type: ${currentType}.`;
    }

    // I limit the result to 24 to keep the page lighter and simpler.
    await renderPokemonList('#pokemonList', pokemonReferences.slice(0, 24), currentSort);
  }

  // When the type changes, I update the URL and redraw the list.
  typeSelect.addEventListener('change', async () => {
    const nextType = typeSelect.value;
    const newUrl = nextType === 'all'
      ? '/pokemon-list/index.html'
      : `/pokemon-list/index.html?type=${encodeURIComponent(nextType)}`;

    window.history.replaceState({}, '', newUrl);
    await renderCurrentState();
  });

  // When the sort changes, I redraw the list.
  sortSelect.addEventListener('change', renderCurrentState);

  await renderCurrentState();
}

init();
