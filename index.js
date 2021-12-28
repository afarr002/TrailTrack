const insertCampgroundsEl = document.querySelector("#insertCampgroundsEl");

const getCampgrounds = () => {
  const getCampApiUrl = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CO&api_key=oSfzNz3dTkFvHFrco2C2sYljO4uhXBaTYHwx7kib`;

  fetch(getCampApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      console.log(info);
      // futureWeather();

      for (i = 0; i < info.data.length; i++) {
        const template = `<div class="card" style="width: 18rem">
            <div class="card-header whiteText">${info.data[i].name}</div>
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
                  info.data[i].images.length > 0
                    ? info.data[i].images[0].url
                    : ""
                }" alt="${
          info.data[i].images.length > 0 ? info.data[i].images[0].altText : ""
        }"></li>
                <li class="list-group-item"></li>
              </ul>
        </div>`;
        insertCampgroundsEl.innerHTML = template;
      }
    });
};

const futureWeather = (info) => {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${info.data[2].latitude}&lon=${info.data[2].longitude}&appid=66cae1bd334eb7747100576e02048328&units=imperial`;

  fetch(weatherApiUrl)
    .then((res) => {
      return res.json();
    })
    .then((weatherInfo) => {
      console.log(weatherInfo);
    });
};

getCampgrounds();
