// Get the current year and last modified date
const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('last-modified');

const date = new Date();
yearElement.textContent = date.getFullYear();
lastModifiedElement.textContent = `Last Modified: ${date.toLocaleDateString()}`;

// Define static values for temperature and wind speed
const temperature = 20; // in °C
const windSpeed = 10; // in km/h

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    // Calculate windchill factor using the formula
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  } else {
    return "N/A";
  }
}

// Display windchill factor in the "Weather" section
const windChillElement = document.getElementById('wind-chill');
const windChillValue = calculateWindChill(temperature, windSpeed);
windChillElement.textContent = `Wind Chill: ${windChillValue}°C`;

// Display temperature and wind speed values
const temperatureElement = document.getElementById('temperature');
const windSpeedElement = document.getElementById('wind-speed');
temperatureElement.textContent = `Temperature: ${temperature}°C`;
windSpeedElement.textContent = `Wind Speed: ${windSpeed} km/h`;