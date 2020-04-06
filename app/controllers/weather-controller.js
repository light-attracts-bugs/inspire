import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
  let weatherElem = document.getElementById("weather")
  let fahrenheit = (store.State.weather.kelvin - 273.15) * (9/5) + 32
  weatherElem.innerText = store.State.weather.city + " " + Math.round(fahrenheit) + " °F"
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
