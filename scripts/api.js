
export async function fetchData() {
  let randomPage = Math.floor(Math.random() * 42);
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`);
  const data = await res.json();
  localStorage.setItem('character', JSON.stringify(data));
}


 