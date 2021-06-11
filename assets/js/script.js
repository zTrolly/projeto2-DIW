// valores iniciais e constantes
const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const url = 'https://api.themoviedb.org/3/search/multi?api_key=fa08c4b23ba5324d5e306ec5d6eab4d5&language=pt-BR&page=1';

// elementos DOM
const buttonElement = document.querySelector('#search__button');
const inputElement = document.querySelector('#search__input');
var nmrPagina = 1;

const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');


    buttonNext.onclick = function(){
        nmrPagina= nmrPagina + 1;
        console.log(nmrPagina);
    };
    
    buttonPrev.onclick = function(){
        nmrPagina= nmrPagina - 1;
        console.log(nmrPagina);
    };


function verificaPagina(){
    if(nmrPagina == 1){
        buttonPrev.classList.replace("prev", "prev hidden");
    }else{
        buttonPrev.classList.replace("prev hidden", "prev");
    }
}


    
    
   




function executaPesquisa () {
    let query = inputElement;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&page=${nmrPagina}`);
    xhr.send ();
}

buttonElement.addEventListener ('click', executaPesquisa);










// buttonElement.onclick = function(event){
//     event.preventDefault();
//     const value = inputElement.value;

//     const newUrl = url + '&query=' + value;

//     fetch(newUrl)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log('Data: ',data);
//         })
//         .catch((error) => {
//             console.log('Erro: ', error)
//         });

//     console.log('Value', value);
// }