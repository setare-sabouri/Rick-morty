import {score} from "./app.js";
let imgEl=document.querySelector(".card-img");
const resultEl=document.querySelector(".card-name");
resultEl.classList.add("result");
export function validate(e,character) {
    if (e.target.value===character.status) {
      resultEl.innerHTML=`Right ${character.name} is ${character.status}`;
      console.log("object");

      updateScore(score);
      return true
      console.log("object");
    }
    else if (e.target.value!==character.status) {
        resultEl.innerHTML=`Oops ! ${character.name} is ${character.status}`;
        return false;
    }
    else{
        resultEl.innerHTML=`Haha ! ${character.name} is ${character.status}`; //unknown
        return false
    }

  }

const updateScore=(score)=> {
  imgEl.before(`correct : ${score++}`);
  return
  console.log("object");
}

