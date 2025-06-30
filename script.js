const apiKey = "9587c9e1c68a59010c507c99f60c8cfd";
      const apiURL =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");
      const back = document.querySelector(".back");

      async function checkweather(city) {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await response.json();

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

          if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "Images/clouds.png";
            back.style.backgroundImage = "url('Images/cloud1.jpeg')";
          } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "Images/clear.png";
            back.style.backgroundImage = "url('Images/clear1.jpg')";
          } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
            back.style.backgroundImage = "url('Images/drizzle1.jpg')";
          } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "Images/mist.png";
            back.style.backgroundImage = "url('Images/mist1.jpg')";
          } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "Images/rain.png";
            back.style.backgroundImage = "url('Images/rain1.jpg')";
          } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "Images/snow.png";
            back.style.backgroundImage = "url('Images/snow1.jpg')";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      searchBtn.addEventListener("click", () => {
        checkweather(searchBox.value);
      });