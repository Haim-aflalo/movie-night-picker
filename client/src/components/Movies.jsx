import axios from "axios";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/movies");
        setMovies(response.data.movies);
        console.log(response);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
      console.log(movies);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <input
          type="text"
          placeholder="Search the Name or the Genre"
          onChange={(e) => setFilter(e.target.value)}
        />
        {movies
          .filter(
            (movie) =>
              movie.Title.includes(filter) ||
              movie.Genre.includes(filter) ||
              filter == "all",
          )
          .map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard
                id={movie.imdbID}
                image={movie.Images}
                title={movie.Title}
                year={movie.Year}
                runtime={movie.Runtime}
                genre={movie.Genre}
                language={movie.Language}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Movies;
