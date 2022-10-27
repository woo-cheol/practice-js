var API_KEY = "dcaab9c23917661130fc003704aa8483";

function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = document.querySelector("#weather span:nth-child(1)");
        const name = document.querySelector("#weather span:nth-child(3)");
        
        weather.innerText = data.name;
        name.innerText = `Today is ${data.weather[0].main}, Current Temp: ${Math.trunc(data.main.temp)}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);