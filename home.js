import { fetchData } from './api.js';
fetchData();

const play = document.querySelector('.play-btn');
play.addEventListener('click', function () {
    document.location.href = "guesspage.html";
})
