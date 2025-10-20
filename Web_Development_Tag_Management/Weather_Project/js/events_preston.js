function events(){
    const apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    //This si the fetch method with one parameter required (JSON URL). 
    fetch(apiURL)
    //This line is a promise that will return a response
    .then((response) => response.json())
    //convert a response data in JavaScript object format.
    .then((jsObject) => {
        console.log(jsObject);

    // This code embeed the content on the HTML after the jsObject was call/created - events
    document.getElementById('event1').textContent = jsObject.towns[6].events[0];
    document.getElementById('event2').textContent = jsObject.towns[6].events[1];
    document.getElementById('event3').textContent = jsObject.towns[6].events[2];

    }); // end of call weather
}