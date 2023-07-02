// select HTML elements in the document
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature-data');
const weatherSummary = document.querySelector('.weather-summary');
const windSpeed = document.querySelector('.wind-speed-data');
const chill = document.querySelector('.wind-chill-result');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Gwanda&units=metric&appid=0d93e338ca47dc4824640db72fd9867b';

async function apiFetch() {
  const response = await fetch(url);
  if(response.ok) {
      const data = await response.json();
      //console.log(data);For tests only.
      displayResults(data);

  }
}

function displayResults (weatherData) {
  temperature.textContent = `${weatherData.main.temp.toFixed(1)}`;
  
  let weatherIconAlt = `${weatherData.weather[0].description}`;
  let altArray = weatherIconAlt.split(" ");

  for(let i = 0; i < altArray.length; i++) {
      altArray[i] = altArray[i][0].toUpperCase() + altArray[i].substr(1);
  };

  weatherIconAlt = altArray.join(" ");
  
  let weatherIconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', weatherIconSrc);
  weatherIcon.setAttribute('alt', weatherIconAlt);

  weatherSummary.innerHTML = `<b>${weatherIconAlt}</b>`;

  windSpeed.textContent = `${weatherData.wind.speed}`;

  tempInFloat = parseFloat(temperature.textContent);
  windInFloat = parseFloat(windSpeed.textContent);

  function calculateChill() {
      const windChill = 35.74 + (0.6215 * tempInFloat) - (35.75 * (windInFloat ** 0.16)) + (0.4275 * tempInFloat * (windInFloat ** 0.16));
    chill.textContent = windChill;
  };

  if (tempInFloat <= 50 && windInFloat > 3){
      calculateChill();
  } else {
      chill.textContent = 'N/A';
  };

}





apiFetch();