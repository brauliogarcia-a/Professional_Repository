import { getLocalStorage, setLocalStorage, updateFavoriteCount } from './utils.mjs';

// This is the key name I use in localStorage.
const favoriteKey = 'pokemon-favorites';

// This returns all saved favorite Pokemon.
export function getFavorites() {
  return getLocalStorage(favoriteKey) || [];
}

// This checks if a Pokemon is already in favorites.
export function isFavorite(name) {
  const favorites = getFavorites();
  return favorites.some((pokemon) => pokemon.name === name);
}

// This adds one Pokemon to favorites.
export function addFavorite(pokemon) {
  let favorites = getFavorites();

  // I check first so I do not save duplicates.
  const alreadySaved = favorites.find((item) => item.name === pokemon.name);
  if (alreadySaved) return false;

  // I save only the fields I actually need for the favorites page.
  favorites.push({
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default,
    types: pokemon.types.map((type) => type.type.name)
  });

  setLocalStorage(favoriteKey, favorites);
  updateFavoriteCount();
  return true;
}

// This removes one Pokemon from favorites by name.
export function removeFavorite(name) {
  let favorites = getFavorites();
  favorites = favorites.filter((pokemon) => pokemon.name !== name);
  setLocalStorage(favoriteKey, favorites);
  updateFavoriteCount();
}
