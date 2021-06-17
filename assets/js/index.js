const btnMobile =  document.getElementById('btn-mobile');

function toggleMenu(){
    const nav =  document.getElementById('nav');
    nav.classList.toggle('active');
}
<<<<<<< HEAD
btnMobile.addEventListener('click', toggleMenu);
}

/*PARTE DA API DE DESTAQUES*/
const API_KEY = 'fa08c4b23ba5324d5e306ec5d6eab4d5';
const imgPath = 'https://image.tmdb.org/t/p/w500';
const trendingPath = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=pt-BR`;

async function exibirTrending(){
    let text = '';
    let display =  document.getElementById('display');
    const d = await fetch(`${trendingPath}`);
    const f = await d.json();
    text = text + `
        <div class="boxSerie">
            <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${imgPath}${f.results[0].backdrop_path}" alt="">
                    </div>
                    <div class="flip-card-back">
                        <h1 class="boxSerie__title">${f.results[0].original_name}</h1>
                        <p class="boxSerie__lancamento">${f.results[0].first_air_date}</p>
                        <p class="boxSerie__avaliacao">${f.results[0].vote_average}</p>
                        <a href="https://www.themoviedb.org/tv/${f.results[0].id}" target ="_blank" class="boxSerie__btn">Saiba Mais</a>
                    </div>
                    </div>
                </div>
        </div>

        <div class="boxSerie">
        <div class="flip-card">
                <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${imgPath}${f.results[1].backdrop_path}" alt="">
                </div>
                <div class="flip-card-back">
                    <h1 class="boxSerie__title">${f.results[1].original_name}</h1>
                    <p class="boxSerie__lancamento">${f.results[1].first_air_date}</p>
                    <p class="boxSerie__avaliacao">${f.results[1].vote_average}</p>
                    <a href="https://www.themoviedb.org/tv/${f.results[1].id}" target ="_blank" class="boxSerie__btn">Saiba Mais</a>
                </div>
                </div>
            </div>
    </div>
    <div class="boxSerie">
    <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${imgPath}${f.results[2].backdrop_path}" alt="">
              </div>
              <div class="flip-card-back">
                <h1 class="boxSerie__title">${f.results[2].original_name}</h1>
                <p class="boxSerie__lancamento">${f.results[2].first_air_date}</p>
                <p class="boxSerie__avaliacao">${f.results[2].vote_average}</p>
                <a href="https://www.themoviedb.org/tv/${f.results[2].id}" target ="_blank" class="boxSerie__btn">Saiba Mais</a>
              </div>
            </div>
        </div>
    </div>
    <div class="boxSerie">
    <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${imgPath}${f.results[3].backdrop_path}" alt="">
              </div>
              <div class="flip-card-back">
                <h1 class="boxSerie__title">${f.results[3].original_name}</h1>
                <p class="boxSerie__lancamento">${f.results[3].first_air_date}</p>
                <p class="boxSerie__avaliacao">${f.results[3].vote_average}</p>
                <a href="https://www.themoviedb.org/tv/${f.results[3].id}" target ="_blank" class="boxSerie__btn">Saiba Mais</a>
              </div>
            </div>
        </div>
    </div>
    <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${imgPath}${f.results[4].backdrop_path}" alt="">
              </div>
              <div class="flip-card-back">
                <h1 class="boxSerie__title">${f.results[4].original_name}</h1>
                <p class="boxSerie__lancamento">${f.results[4].first_air_date}</p>
                <p class="boxSerie__avaliacao">${f.results[4].vote_average}</p>
                <a href="https://www.themoviedb.org/tv/${f.results[4].id}" target ="_blank" class="boxSerie__btn">Saiba Mais</a>
              </div>
            </div>
        </div>
    </div>
    `;

    display.innerHTML = text;

}
exibirTrending();

/*Ultimas avaliações*/
async function exibirAvaliacoes(){
    let text = '';
    let filmes =  document.getElementById('filmes');
    

}
=======


btnMobile.addEventListener('click', toggleMenu);
>>>>>>> parent of 8789b22 (Em destaque add)
