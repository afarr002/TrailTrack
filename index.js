const insertCampgroundsEl = document.querySelector("#insertCampgroundsEl");

const getCampgrounds = () => {
  const getCampApiUrl = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CO&limit=25&api_key=oSfzNz3dTkFvHFrco2C2sYljO4uhXBaTYHwx7kib`;

  fetch(getCampApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      console.log(info);
      // futureWeather();

      for (i = 0; i < info.data.length; i++) {
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${info.data[2].latitude}&lon=${info.data[2].longitude}&appid=66cae1bd334eb7747100576e02048328&units=imperial`;

        fetch(weatherApiUrl)
          .then((res) => {
            return res.json();
          })
          .then((weatherInfo) => {
            console.log(weatherInfo);
            const template = `<div class="card" style="width: 18rem">
      <div class="card-header whiteText">${info.data[2].name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Description: ${
            info.data[2].description
          }</li>
          <li class="list-group-item">Fees: ${
            info.data[2].fees.length > 0 ? info.data[2].fees[0].cost : ""
          }</li>
          <li class="list-group-item">URL: <a href="${
            info.data[2].url
          }">Click here to visit ${
              info.data[2].name
            }'s National Park Service Page</a></li>
          <li class="list-group-item">Images: <img src="${
            info.data[2].images.length > 0 ? info.data[2].images[0].url : ""
          }" alt="${
              info.data[2].images.length > 0
                ? info.data[2].images[0].altText
                : ""
            }"></li>
          <li class="list-group-item"></li>
        </ul>
  </div>`;
            insertCampgroundsEl.innerHTML = template;
          });
      }
    });
};

const futureWeather = () => {
  for (i = 0; i > weatherInfo.daily.length; i++) {}
};

getCampgrounds();
