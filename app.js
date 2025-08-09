function refreshweather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.main.temp;

  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.name;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "4612225ecd1b2c0b68cbfbb8d5268590";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshweather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");
