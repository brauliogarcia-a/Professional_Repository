// this line create a variable to get the plain text JSON file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//This si the fetch method with one parameter required (JSON URL). 
fetch(requestURL)
   //This line is a promise that will return a response
  .then(function (response) {
    return response.json();
  })
  //convert a response data in JavaScript object format.
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    // This variable will take the JS object and conver it into an array in JS named prophets
    const towns = jsonObject['towns'];
    //This "for" will loop each of the items inside the array and put it into the html tags, also the loop will create some of the HTML tags to embeed the content 
    towns.forEach( town => {
      if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"){
       let card = document.createElement('section');
       let h2 = document.createElement('h2');
       let date = document.createElement('p');
       let population = document.createElement('p');
       let rain = document.createElement('p');
       let image = document.createElement('img');

       h2.textContent = town.name
       date.textContent = 'Year Established: '+ town.yearFounded;
       population.textContent = 'Current Population: '+ town.currentPopulation;  
       rain.textContent = 'Annual Rainfall: '+ town.averageRainfall;
       image.setAttribute('src', `img/${town.photo}`);

       card.appendChild(h2);
       card.appendChild(date);
       card.appendChild(population);
       card.appendChild(rain);
       card.appendChild(image);

       document.querySelector('div.towns').appendChild(card);
     }
    });
  });