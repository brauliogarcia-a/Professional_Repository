// This is the base URL for PokéAPI.
const baseUrl = 'https://pokeapi.co/api/v2/';

// This helper checks if the fetch worked.
// If the request failed, I stop and throw an error.
// If it worked, I convert the response into JSON.
async function convertToJson(response) {
  if (!response.ok) {
    throw new Error('The API request failed.');
  }

  return await response.json();
}

// This helper does the fetch request and sends the response to my JSON converter.
async function fetchJson(url) {
  const response = await fetch(url);
  return await convertToJson(response);
}

// This gets a basic list of Pokemon from the API.
// limit = how many
// offset = where to start
export async function getPokemonList(limit = 24, offset = 0) {
  const data = await fetchJson(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
  return data.results;
}

// This gets one Pokemon by name or id.
// Example: 'pikachu' or 25.
export async function getPokemonByNameOrId(nameOrId) {
  return await fetchJson(`${baseUrl}pokemon/${nameOrId.toString().toLowerCase()}`);
}

// This gets the first 151 Pokemon.
// I added localStorage cache so the page is faster and does not request the same large list every time.
export async function getPokemonFullList() {
  const cachedList = localStorage.getItem('pokemon-full-list');

  if (cachedList) {
    return JSON.parse(cachedList);
  }

  const data = await fetchJson(`${baseUrl}pokemon?limit=151&offset=0`);
  localStorage.setItem('pokemon-full-list', JSON.stringify(data.results));
  return data.results;
}

// This gets the list of Pokemon types.
// I also cache it because types do not change often.
export async function getTypeList() {
  const cachedTypes = localStorage.getItem('pokemon-type-list');

  if (cachedTypes) {
    return JSON.parse(cachedTypes);
  }

  const data = await fetchJson(`${baseUrl}type`);

  // I remove the types that are not useful for my project UI.
  const filteredTypes = data.results.filter((type) => {
    return !['unknown', 'shadow'].includes(type.name);
  });

  localStorage.setItem('pokemon-type-list', JSON.stringify(filteredTypes));
  return filteredTypes;
}

// This gets all Pokemon that belong to one specific type.
// Example: grass, fire, water.
export async function getPokemonByType(typeName) {
  const data = await fetchJson(`${baseUrl}type/${typeName}`);

  // The API gives me nested data, so here I return only the pokemon references I need.
  return data.pokemon.map((item) => item.pokemon);
}
