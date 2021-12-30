// const dotenv = require("dotenv").config();
// const npsApiKey = process.env.NPS_API_KEY;
// const weatherApiKey = process.env.WEATHER_API_KEY;
const npsApiKey = "oSfzNz3dTkFvHFrco2C2sYljO4uhXBaTYHwx7kib";
const weatherApiKey = "66cae1bd334eb7747100576e02048328";

const insertCampgroundsEl = document.querySelector("#insertCampgroundsEl");
const insertFutureCampgroundWeatherEl =
  document.querySelector("#insertWeatherCard");
let campLat = "";
let campLon = "";
let campName = "";

const getCampgrounds = () => {
  const getCampApiUrl = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CO&api_key=${npsApiKey}`;

  fetch(getCampApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      console.log(info);
      // futureWeather();

      for (i = 0; i < info.data.length; i++) {
        campLat = info.data[i].latitude;
        campLon = info.data[i].longitude;
        campName = info.data[i].name;

        const template = `<div class="card" style="width: 18rem">
        <div class="card-header whiteText">${campName}</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Description: ${
          info.data[i].description
        }</li>
        <li class="list-group-item">Fees: ${
          info.data[i].fees.length > 0 ? info.data[i].fees[0].cost : ""
        }</li>
        <li class="list-group-item">URL: <a href="${
          info.data[i].url
        }">Click here to visit ${
          info.data[i].name
        }'s National Park Service Page</a></li>
        <li class="list-group-item">Images: <img src="${
          info.data[i].images.length > 0 ? info.data[i].images[0].url : ""
        }" alt="${
          info.data[i].images.length > 0
            ? info.data[i].images[0].altText
            : `Image of ${campName}`
        }"></li>
        </ul>
        </div>`;
        insertCampgroundsEl.innerHTML = template;
        futureWeather();
      }
    });
};

const futureWeather = () => {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${campLat}&lon=${campLon}&appid=${weatherApiKey}&units=imperial`;

  fetch(weatherApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((weatherInfo) => {
      console.log(weatherInfo);
      for (i = 0; i < weatherInfo.daily.length; i++) {
        const weatherCard = `<div class="currentBlock">
          <h2>
            ${campName} (${new Date().toLocaleDateString()})
          </h2>
          <p>Max Temp: ${weatherInfo.daily[i].temp.max}F</p>
          <p>Min Temp: ${weatherInfo.daily[i].temp.min}F</p>
          <p>Weather: ${
            weatherInfo.daily[i].weather[0].description
          } <img src="https://openweathermap.org/img/w/${
          weatherInfo.daily[i].weather[0].icon
        }.png"></p>
        </div>`;
        return (insertFutureCampgroundWeatherEl.innerHTML = weatherCard);
      }
    });
};

getCampgrounds();
