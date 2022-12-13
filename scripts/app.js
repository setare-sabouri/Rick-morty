import { fetchData } from "./api.js";
import { validate } from "./validations.js";
let selected;

const initialize=()=>{
  fetchData();
  setTimeout(() => {
    let characters = JSON.parse(localStorage.getItem("character"));
    renderCharacter(characters);
  }, 500);
}

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


const aliveBtn = document.querySelector(".alive-btn");
const deadBtn = document.querySelector(".dead-btn");
aliveBtn.addEventListener("click",function() {
	 validate(event,selected);
});
deadBtn.addEventListener("click", function (){
	validate(event,selected);
});


initialize();