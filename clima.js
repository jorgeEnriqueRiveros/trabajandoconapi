fetch('https://goweather.herokuapp.com/weather/japon')
    .then(response => response.json())
    .then(data => {
        console.log(data.temperature)
        console.log(data.wind)
        console.log(data.description)
        console.log(data.forecast)
});