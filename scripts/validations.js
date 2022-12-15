
const resultEl=document.querySelector(".card-name");
resultEl.classList.add("result");
export function validate(e,character) {
    if (e.target.value===character.status) {
      resultEl.innerHTML=`Right ${character.name} is ${character.status}`;
      return true;
    }
    else if (e.target.value!==character.status) {
        resultEl.innerHTML=`Oops ! ${character.name} is ${character.status}`; 
        return false;
    }
    else{
        resultEl.innerHTML=`Haha ! ${character.name} is ${character.status}`; //unknown
        return false;
    }

  }



