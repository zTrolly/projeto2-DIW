// valores iniciais e constantes
const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const url = 'https://api.themoviedb.org/3/search/multi?api_key=fa08c4b23ba5324d5e306ec5d6eab4d5&language=pt-BR&page=1';

// elementos DOM
const buttonElement = document.querySelector('#search__button');
const inputElement = document.querySelector('#search__input');

function executaPesquisa () {
    let query = inputElement;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&page=${nmrPagina}`);
    xhr.send ();
}

buttonElement.addEventListener ('click', executaPesquisa);









