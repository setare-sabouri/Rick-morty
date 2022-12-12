const cardimgEl=document.querySelector(".card-img");
const cardnameEl=document.querySelector(".card-name");
function renderData(data) {
   cardimgEl.src=data.results[2].image;
   cardnameEl.innerHTML=data.results[2].name;
    // for (let i = 0; i < 10; i++) {
    //     let imgEl = document.createElement("img");
    //     imgEl.src=data.results[i].image;
    //     document.body.appendChild(imgEl);
    //     imgEl.after(data.results[i].name);

        
    // } 

}
export async function fetchData() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    console.log(data.results[0].name);
    if (data) {
console.log("sss");    }
    renderData(data)
}

fetchData();