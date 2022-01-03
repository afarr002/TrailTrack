// // const dotenv = require("dotenv").config();
// // const npsApiKey = process.env.NPS_API_KEY;
// // const weatherApiKey = process.env.WEATHER_API_KEY;
// const npsApiKey = "oSfzNz3dTkFvHFrco2C2sYljO4uhXBaTYHwx7kib";
// const fetch = require("node-fetch");
// // const weatherApiKey = "66cae1bd334eb7747100576e02048328";
// const userStateSelection = "CO";
// let campgroundDbInfo = [];

// // const insertCampgroundsEl = document.querySelector("#insertCampgroundsEl");
// // const insertFutureCampgroundWeatherEl =
// //   document.querySelector("#insertWeatherCard");
// // let campLat = "";
// // let campLon = "";
// // let campName = "";

// const getCampgrounds = () => {
//   const getCampApiUrl = `https://developer.nps.gov/api/v1/campgrounds?stateCode=${userStateSelection}&api_key=${npsApiKey}`;

//   fetch(getCampApiUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((info) => {
//       console.log(info);
//       // futureWeather();

//       for (i = 0; i < info.data.length; i++) {
//         let campsiteInfo = {
//           campName: info.data[i].name,
//           campLat: info.data[i].latitude,
//           campLon: info.data[i].longitude,
//           campDescription: info.data[i].description,
//           campFees:
//             info.data[i].fees.length > 0 ? info.data[i].fees[0].cost : "",
//           campUrl: info.data[i].url,
//           campImages:
//             info.data[i].images.length > 0 ? info.data[i].images[0].url : "",
//         };
//         campgroundDbInfo.push(campsiteInfo);
//       }
//     });
// };

// console.log(campgroundDbInfo);
// getCampgrounds();

// // const futureWeather = () => {
// //   const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${campLat}&lon=${campLon}&appid=${weatherApiKey}&units=imperial`;

// //   fetch(weatherApiUrl)
// //     .then((res) => {
// //       return res.json();
// //     })
// //     .then((weatherInfo) => {
// //       console.log(weatherInfo);
// //       for (i = 0; i < weatherInfo.daily.length; i++) {
// //         const weatherCard = `<div class="currentBlock">
// //           <h2>
// //             ${campName} (${new Date().toLocaleDateString()})
// //           </h2>
// //           <p>Max Temp: ${weatherInfo.daily[i].temp.max}F</p>
// //           <p>Min Temp: ${weatherInfo.daily[i].temp.min}F</p>
// //           <p>Weather: ${
// //             weatherInfo.daily[i].weather[0].description
// //           } <img src="https://openweathermap.org/img/w/${
// //           weatherInfo.daily[i].weather[0].icon
// //         }.png"></p>
// //         </div>`;
// //         return (insertFutureCampgroundWeatherEl.innerHTML = weatherCard);
// //       }
// //     });
// // };

// module.exports = campgroundDbInfo;
