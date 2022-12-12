
export async function fetchData() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    console.log(data.results[0].name);

    for (let i = 0; i < 10; i++) {
        let imgEl = document.createElement("img");
        imgEl.src=data.results[i].image;
        document.body.appendChild(imgEl);
        imgEl.after(data.results[i].name);

        
    }
}

fetchData();