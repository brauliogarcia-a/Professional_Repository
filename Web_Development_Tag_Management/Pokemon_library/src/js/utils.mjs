// This variable helps me control the little animation on the favorites count.
// I keep the timeout here so I can reset it if the user clicks favorites again quickly.
let favoriteTimeout;

// Small helper to select one element from the page.
// I can also pass a parent if I do not want to search the whole document.
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// This reads a value from the URL query string.
// Example: ?pokemon=bulbasaur -> getParam('pokemon') returns 'bulbasaur'.
export function getParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// This reads data from localStorage and converts it back from JSON into a normal JavaScript value.
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// This saves data in localStorage.
// localStorage only saves strings, so I convert the data to JSON first.
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// This renders a whole list by using a template function.
// templateFn = tells me how each item should look.
// parentElement = where I want to print the HTML.
// list = the data I want to loop through.
// clear = if true, it clears old content first.
export function renderListWithTemplate(templateFn, parentElement, list, clear = true) {
  if (clear) {
    parentElement.innerHTML = '';
  }

  const html = list.map(templateFn).join('');
  parentElement.insertAdjacentHTML('beforeend', html);
}

// This loads an external HTML partial, like my header or footer.
async function loadTemplate(path) {
  const response = await fetch(path);
  return await response.text();
}

// This loads the shared header and footer into the page.
// I used this pattern because it is similar to SleepOutside and helps me avoid repeating HTML.
export async function loadHeaderFooter() {
  const header = qs('#main-header');
  const footer = qs('#main-footer');

  if (header) {
    header.innerHTML = await loadTemplate('/partials/header.html');
  }

  if (footer) {
    footer.innerHTML = await loadTemplate('/partials/footer.html');
  }

  // After loading the header, I also refresh the favorites count.
  updateFavoriteCount();
}

// This updates the number shown in the header for favorite Pokemon.
export function updateFavoriteCount() {
  const favorites = getLocalStorage('pokemon-favorites') || [];
  const countElement = qs('#favorite-count');

  if (countElement) {
    countElement.textContent = favorites.length;

    // I clear the old timeout so the animation does not stack in a weird way.
    clearTimeout(favoriteTimeout);
    countElement.classList.add('pulse-count');
    favoriteTimeout = setTimeout(() => {
      countElement.classList.remove('pulse-count');
    }, 700);
  }
}

// This makes text look nicer for the UI.
// Example: 'special-attack' becomes 'Special Attack'.
export function capitalizeWords(text) {
  return text
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
