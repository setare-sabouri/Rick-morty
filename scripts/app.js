import { fetchData } from "./api.js";
import { validate } from "./validations.js";
fetchData();
const aliveBtn = document.querySelector(".alive-btn");
const deadBtn = document.querySelector(".dead-btn");

let characters;
setTimeout(() => {
  characters = JSON.parse(localStorage.getItem("character"));
  renderData(characters);
}, 500);

const cardimgEl = document.querySelector(".card-img");
const cardnameEl = document.querySelector(".card-name");
const renderData=(characters)=> {
  let selected=shuffle(characters);
  console.log(selected);
  cardimgEl.src = selected.image;
  cardnameEl.innerHTML = selected.name;
}
const shuffle=(characters)=>{
  let resultsLen=characters.results.length;
  let randomIndex = Math.floor(Math.random() * resultsLen);
  return characters.results[randomIndex];
}
aliveBtn.addEventListener("click",function() {
	 validate(event,character);
});
deadBtn.addEventListener("click", function (){
	validate(event,character);
});

