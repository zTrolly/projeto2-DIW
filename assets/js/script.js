
// valores iniciais e constantes
const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const url = 'https://api.themoviedb.org/3/search/multi?api_key=fa08c4b23ba5324d5e306ec5d6eab4d5&language=pt-BR';

// elementos DOM
const buttonElement = document.querySelector('#search__button');
const inputElement = document.querySelector('#search__input');




buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data: ',data);
        })
        .catch((error) => {
            console.log('Erro: ', error)
        });


    console.log('Value', value);
}