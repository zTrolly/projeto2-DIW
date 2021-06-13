const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const SearchInput = 'https://api.themoviedb.org/3/search/movie?api_key=1d67b3bbb1493eacc10d061ff172b9ee&language=pt-BT';
const ImagePath = 'https://image.tmdb.org/t/p/w500/${filme.poster_path}';

// function exibeFilmes(){
//     let divFilmes = document.getElementById('Filmes');
//     let texto = '';

//     //Montar texto HTML dos Filmes
//     let dados = JSON.parse(this.responseText);
//     for (i=0; i< dados.results.length; i++){
//         let filme = dados.results[i];
//         let mediaType = filme.media_type;
//         if(mediaType == "movie" || "tv"){
//             const Poster = filme.poster_path;
//             if (Poster){
//                 texto = texto + `
//                 <div class="boxFilme">
//                     <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="">
//                 </div>
//                 `;
//             };
//         };
//     };

//     // Preencher a DIV com o texto HTML
//     divFilmes.innerHTML = texto
// }

function exibeAtor(){
    let divAtor = document.getElementById('Ator');
    let texto = '';

    let dados =JSON.parse(this.responseText);
    for(i=0;i<dados.results.length; i++){
        let ator = dados.results[i];
        texto = texto + `
                <div class="boxAtor">
                    <img src="https://image.tmdb.org/t/p/w500/${ator.profile_path}" alt="">
                </div>
                `;

        

    };

    divAtor.innerHTML = texto
}

function executaPesquisa(){
    let query = document.getElementById('search').value;
    let xhr = new XMLHttpRequest();
    xhr.onload =  exibeAtor;
    xhr.open('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BT&query=${query}`);
    xhr.send();

}

document.getElementById('btnPesquisa').addEventListener ('click', executaPesquisa);




