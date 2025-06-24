const form = document.getElementById('form');
const output = document.getElementById('output');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace this!

  output.textContent = 'Loading...';

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await res.json();

    if (data.cod === 200) {
      output.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>${data.weather[0].description}</p>
        <p>🌡️ ${data.main.temp} °C</p>
      `;
    } else {
      output.textContent = `Error: ${data.message}`;
    }
  } catch (err) {
    output.textContent = 'Failed to fetch weather data.';
  }
});
