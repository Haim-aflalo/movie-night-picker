import axios from "axios";
import MovieCard from "./MovieCard";
// import { useMovies } from "../../states/movies";
import { useState, useEffect } from "react";

function Movies() {
  // const loadMovies = useMovies()
  // console.log(loadMovies.movies);

  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/movies");
        setMovies(response.data.movies);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search the Name or the Genre"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="container">
        {movies
          .filter(
            (movie) =>
              movie.Title.includes(filter) ||
              movie.Genre.includes(filter) ||
              filter == "all",
          )
          .map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard
                id={movie.imdbID}
                image={movie.Images}
                title={movie.Title}
                year={movie.Year}
                runtime={movie.Runtime}
                genre={movie.Genre}
                language={movie.Language}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Movies;
