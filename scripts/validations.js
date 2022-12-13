export function validate(e,character) {
    console.log("actually is "+character.status);
    if (e.target.value===character.status) {
      console.log("correct answer");
    }
    else if (e.target.value!==character.status) {
        console.log("wront answer");
    }
    else{
        console.log("unknown");
    }

  }