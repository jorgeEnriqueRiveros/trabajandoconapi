fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {console.log(data.message)
});

/*
let idDog = Math.floor(Math.random() * 826)
fetch('https://dog.ceo/api/breeds/image/random' + idDog)
.then(response => response.json())
.then(data => {console.log(data.message)
document.getElementById('imagendog').src=data.message;
});
*/