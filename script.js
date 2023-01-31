$(document).ready(function() {
// //   // API endpoint for current weather data
  const currentWeatherAPI = "b82961bcb895919e53981ccf79099959";
// //   // API endpoint for 5-day weather forecast
  const fiveDayApiKey = "&appid=492c4eefebc26deee3edaeec26e32912";
// //   // API key
  const apiKey = "bd313bce04e93c5366568211e4106880";

  // const fullWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=b82961bcb895919e53981ccf79099959';

  const plainWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  
  // Get the value of the input field from the page, when we submit the form
  // Extract the value and add it to the URL query string
  // Add our API token to the URL query string
  // Console.log the response from the weather API

//   // Get weather data for the entered city
  $("#search-form").submit(function(event) {
    event.preventDefault();
    
    const city = $("#search-input").val().toLowerCase();

    // Get current weather data
    $.ajax({
      url: plainWeatherURL + city + '&appid=' + currentWeatherAPI,
      method: "GET"
    }).then(function(response) {
      // Update HTML with current weather data
      $("#today").html("<h2>Current weather in " + response.name + ":</h2>" + 
                        "<p>Temperature: " + response.main.temp + "°C</p>" + 
                        "<p>Humidity: " + response.main.humidity + "%</p>" + 
                        "<p>Wind Speed: " + response.wind.speed + "mph</p>");
    });

    // Get 5-day weather forecast data
    $.ajax({
      url: plainWeatherURL + city + fiveDayApiKey,
      method: "GET"
    }).then(function(response) {
      console.log('L41 === response', response);
      // Update HTML with 5-day weather forecast data
      let forecastHTML = "<h2>5-day Weather Forecast:</h2>";
      // for (let i = 0; i < response.list.length; i++) {
      //   if (response.list[i].dt_txt.indexOf("12:00:00") !== -1) {
      //     forecastHTML += "<div class='col-lg-2 mt-3 text-center'>" + 
      //                     "<h3>" + moment(response.list[i].dt_txt).format("MMM Do") + "</h3>" + 
      //                     "<p>Temp: " + response.list[i].main.temp + "°C</p>" + 
      //                     "<p>Humidity: " + response.list[i].main.humidity + "%</p>" + 
      //                     "</div>";
      //   }
      // }
      $("#forecast").html(forecastHTML);
    });
  });

});
$("#search-form").on("submit", function (event) {
    event.preventDefault();
    // code for handling the search goes here
  });