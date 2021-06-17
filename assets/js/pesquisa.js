const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const SearchInput = 'https://api.themoviedb.org/3/search/movie?api_key=1d67b3bbb1493eacc10d061ff172b9ee&language=pt-BT';
const ImagePath = 'https://image.tmdb.org/t/p/w500/${filme.poster_path}';

function exibeFilmes(){
    let divFilmes = document.getElementById('Filmes');
    let texto = '';
    //Montar texto HTML dos Filmes
    let dados = JSON.parse(this.responseText);
    for (i=0; i< dados.results.length; i++){
        let filme = dados.results[i];
        let mediaType = filme.media_type;
        if(mediaType == "movie" || "tv"){
            const Poster = filme.poster_path;
            const Overview = filme.overview
            if (Poster&&Overview){
                texto = texto + `
                <div class="boxFilme">
                    <a href="https://www.themoviedb.org/${mediaType}/${filme.id}" target ="_blank"><img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}"></a>
                    <section class="movieContent">
                        <h2 class="tituloFilme">${filme.original_title}</h2>
                        <p class="overview"><strong>Sinopse: </strong>${filme.overview}</p>
                        <div class="notaFilme"><strong>Nota: </strong><span class="avaliacao">${filme.vote_average}</span></div>
                </section>
                </div>
                `;
            };
        };
    };
    // Preencher a DIV com o texto HTML
    divFilmes.innerHTML = texto
}

document.onclick = function(event){
    const target = event.target;

    if(target.tagName.toLowerCase()==='img'){
        console.log('hello world');
        const filmes = event.target.parentElement;
        const movieInfo = filmes.nextElementSibling;
        movieInfo.classList.add('movieInfo-display');
    }
}


function executaPesquisa(){
    let query = document.getElementById('search').value;
    let xhr = new XMLHttpRequest();
    xhr.onload =  exibeFilmes;
    xhr.open('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BT&query=${query}`);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa);




