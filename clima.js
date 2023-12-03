function obtenerDatosClima(ciudad) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

function obtenerDatosClimaOtraFuente(ciudad) {
    return fetch(`https://goweather.herokuapp.com/weather/${ciudad}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

function actualizarInterfazClima(data) {
    document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
    document.getElementById('wind').innerText = `Viento: ${data.wind.speed} m/s`;
    document.getElementById('description').innerText = `Descripción: ${data.weather[0].description}`;
    document.getElementById('forecast').innerText = `Pronóstico: ${data.weather[0].main}`;

    const weatherImage = document.getElementById('weatherImage');
    switch (data.weather[0].main) {
        case 'Clear':
            weatherImage.src = 'https://img.freepik.com/vector-gratis/letras-venta-verano-caliente-personaje-dibujos-animados-sol_74855-280.jpg';
            break;
        case 'Clouds':
            weatherImage.src = 'https://img.freepik.com/psd-gratis/icono-3d-condiciones-climaticas-lluvia-sol_23-2150108737.jpg';
            break;
        case 'Snow':
            weatherImage.src = 'https://img.freepik.com/psd-gratis/nube-nocturna-copos-nieve-icono-3d-render-ilustracion_47987-11386.jpg';
            break;
        default:
            weatherImage.src = 'https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-datos_23-2150696458.jpg';
    }
}

const ciudadInput = prompt(`Introduce el nombre de la ciudad:`);
if (ciudadInput) {
    Promise.all([
        obtenerDatosClima(ciudadInput),
        obtenerDatosClimaOtraFuente(ciudadInput)
    ])
    .then(([dataOpenWeatherMap, dataOtraFuente]) => {
        actualizarInterfazClima(dataOpenWeatherMap);
        actualizarInterfazClimaOtraFuente(dataOtraFuente);
    })
    .catch(error => {
        console.error('Error al obtener datos del clima:', error);
        document.getElementById('weatherData').innerText = 'Error al obtener datos del clima.';
    });
} else {
    console.error('Nombre de la ciudad no proporcionado.');
}
