export function validate(e,character) {
    if (e.target.innerHTML===character.results[2].status) {
      console.log("equal");
    }
    else{
      console.log("dead");
    }
  }