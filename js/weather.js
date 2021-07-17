const API_KEY = "73288c9298243d5249d775cc922c0e47";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('you live in ', lat, lon)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url)
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')
        city.innerText = `/ 지역 : ${data.name}`;
        weather.innerText = `날씨 : ${data.weather[0].main} / 습도 : ${data.main.humidity}`;
    })
}

function onGeoError() {
    alert('위치를 찾을 수 없다. 따라서 날씨 표시는 불가능하다.')
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)