const btnMobile =  document.getElementById('btn-mobile');

function toggleMenu(){
    const nav =  document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);







/*PARTE DA API DE DESTAQUES*/
const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const imgPath = 'https://image.tmdb.org/t/p/w500/';         // toda imagem vai ter 500 largura
const trendingPath = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=pt-BR`;

async function exibirTrending(){ // espra carregar tudo de dps libera
    let text = ''; 
    let display =  document.getElementById('display');
    const d = await fetch(`${trendingPath}`); // espera carregar o treading path
    const f = await d.json();
    console.log(f);
    
    for(let i =0; i < f.results.length; i++){
        text = text + `
        <div class="serieBox">
                <div class="posterSerie">
                    <a href="https://www.themoviedb.org/movie/${f.results[i].id}" target="_blank"><img src="${imgPath}${f.results[i].poster_path}" alt="${f.results[i].original_title}"></a>
                </div>
                <div class="serieContent">
                    <p class="tituloFilme">${f.results[i].original_title}</p>
                    <p class="sinopse">${f.results[i].overview}</p>
                </div>
            </div>
        `;
    }
    display.innerHTML = text;
}
exibirTrending();

/*Ultimas avaliações*/

