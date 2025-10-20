//CODE 1: for the banner module
// this line create a variable to get the plain text JSON file
function windChill(){
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a386af64b37968bdc5dcfeed5adf1e2c&units=imperial';

//This si the fetch method with one parameter required (JSON URL). 
fetch(apiURL)
   //This line is a promise that will return a response
   .then((response) => response.json())
  //convert a response data in JavaScript object format.
   .then((jsObject) => {
     console.log(jsObject);
     
       // This code embeed the content on the HTML after the jsObject was call/created
       document.getElementById('type').textContent = jsObject.weather[0].main;
       document.getElementById('temp').textContent = jsObject.main.temp_max;
       document.getElementById('humidity').textContent = jsObject.main.humidity;
       document.getElementById('speed').textContent = jsObject.wind.speed;
      
      //windchill
       var temp = jsObject.main.temp_max;
       var wind = jsObject.wind.speed;
     
       // Variables that will contain the automated values from the weather API on week 10
       var temp = document.getElementById("temp").innerHTML;
       var speed = document.getElementById("speed").innerHTML;
     
       var chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
     
       //Logic to display the message
         if (temp <=50 && speed >3) {
           document.getElementById("windChill").innerHTML=chill.toFixed(2);
       }
     
       else {
           document.getElementById("windChill").innerHTML="N/A";
       }
     
     
     
     }); // end of call weather

  }


//CODE 2: for the 5 day forecast
function forecast(){
// this line create a variable to get the plain text JSON file
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a386af64b37968bdc5dcfeed5adf1e2c&units=imperial';

//This si the fetch method with one parameter required (JSON URL). 
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {

    //An array with the five days of the week
    const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //This code gets the days of the week using an especifc hour
    const forecastWeek = jsObject.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );

    //Loop the JSON object to get the information for each day of the week
    let days = 0;
    let i = 0;

    for (i = 0; i < forecastWeek.length; i++) {

      let d = new Date(forecastWeek[i].dt_txt); 

      //this gets the day of the week
      document.getElementById("dayofweek" + (days + 1)).textContent = dayName[d.getDay()];

      //this gets the temp
      document.getElementById("forecast" + (days + 1)).textContent = Math.round(forecastWeek[days].main.temp) + " °F";

      //URL of the image
      const imagesrc = "https://openweathermap.org/img/w/" + forecastWeek[days].weather[0].icon + ".png";

      //This insert the image and text on the table
      document.getElementById("imagesrc" + (days + 1)).textContent = imagesrc;
      document.getElementById("icon" + (days + 1)).setAttribute("src", imagesrc);
      document.getElementById("icon" + (days + 1)).setAttribute("alt", forecastWeek[0].weather[0].description);
      days++;
    }

  });


}




