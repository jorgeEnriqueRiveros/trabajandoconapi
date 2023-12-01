// objetivo leer el API de rick and morty y mostrar la imagen

//fetch('https://rickandmortyapi.com/api/character/300')
  //  .then(function (response){return response.json();})
  //  .then(function (data){console.log(data)});
    let idPersonaje = Math.floor(Math.random() * 826)
    fetch('https://rickandmortyapi.com/api/character/300' + idPersonaje)
    .then(response => response.json())
    .then(data => {
        
    document.getElementById('imagendog').src=data.message;
      // Expected output: 0, 1 or 2
      console.log(data.image)
      console.log(data.name)
    });
    

