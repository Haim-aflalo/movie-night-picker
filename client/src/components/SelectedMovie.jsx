import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SelectedMovie() {
  const [movie, setMovie] = useState({});
  const path = window.location.pathname.split("/").filter(Boolean).at(-1);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/movies");
        const movies = response.data.movies;
        setMovie(movies.find((m) => m.imdbID == path));
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Link to={`/`}>Back</Link>
      <h1>{movie.Title}</h1>
      <p>Pick your seats and enjoy</p>
      <div className="Poster">
        <img src={movie.Poster} alt="" />
        <Link to={`seats/${movie.imdbID}`}>Choose Seats</Link>
        <section className="selected-infos">
          <div className="rating">IMDb:{movie.imdbRating}</div>
          <div className="vote">Votes:{movie.imdbVotes}</div>
          <div className="score">Metascore:{movie.Metascore}</div>
          <div className="story">
            <p>{movie.Plot}</p>
          </div>
          <div className="id">
            Movie ID
            <p>{movie.imdbID}</p>
          </div>
          <div className="year">
            Year <p>{movie.Year}</p>
          </div>
          <Link to={`/`}>Back To List</Link>
          <Link to={`seats/${movie.imdbID}`}>Go to seats</Link>
        </section>
      </div>
    </>
  );
}

export default SelectedMovie;
