import { fetchData } from "./api.js";
import { validate } from "./validations.js";
let selected;
let score=0;
const initialize=()=>{
  fetchData();
  setTimeout(() => {
    let characters = JSON.parse(localStorage.getItem("character"));
    renderCharacter(characters);
  }, 1000);
}
initialize();
const shuffle=(characters)=>{
  let resultsLen=characters.results.length;
  let randomIndex = Math.floor(Math.random() * resultsLen);
  return characters.results[randomIndex];
}
const renderCharacter=(characters)=> {
  const cardimgEl = document.querySelector(".card-img");
  const cardnameEl = document.querySelector(".card-name");
  selected=shuffle(characters);
  cardimgEl.src = selected.image;
  cardnameEl.innerHTML = selected.name;
}

let scoreEl=document.querySelector(".score");
const updateScore=()=> {
  score++;
  console.log(score);
  scoreEl.innerHTML=`Correct : ${score}`;
}

const aliveBtn = document.querySelector(".alive-btn");
const deadBtn = document.querySelector(".dead-btn");
aliveBtn.addEventListener("click",function() {
  if (validate(event,selected)) {
    updateScore();
  }
   setTimeout(() => {
    initialize();
  }, 2000);
});

deadBtn.addEventListener("click",function () {
  if(validate(event,selected)) {
	updateScore();
}
  setTimeout(() => {
    initialize();
  }, 2000);
});

