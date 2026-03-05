// export async function getMovies() {
//   const response = await fetch("http://localhost:3000/api/movies");
//   const data = await response.json();
//   return data.products;
// }

export async function fetchData() {
  try {
    const response = await axios.get("http://localhost:3000/api/movies");
    return response.data.movies;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
