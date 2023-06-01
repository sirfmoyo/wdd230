document.getElementById("windChillForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var temperature = parseFloat(document.getElementById("temperature").value);
    var windSpeed = parseFloat(document.getElementById("windSpeed").value);
  
    // Check if temperature and wind speed meet the requirements
    if (temperature <= 50 && windSpeed > 3.0) {
      var windChill = calculateWindChill(temperature, windSpeed);
      document.getElementById("result").textContent = "Wind Chill: " + windChill.toFixed(2) + "°F";
    } else {
      document.getElementById("result").textContent = "N/A";
    }
  });
  
  function calculateWindChill(temperature, windSpeed) {
    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
  }
  