import { useNavigate } from "react-router-dom";

function MovieCard(props) {
  const navigate = useNavigate();

  function goMovie() {
    navigate("/movies");
    localStorage.setItem("id", props.id);
  }
  return (
    <div className="card">
      <section className="card infos">
        <img src={props.image} />
        <h3>{props.title}</h3>
      </section>
      <section className="movie-infos">
        <div className="year">
          <p>year</p>
          <p>{props.year}</p>
        </div>
        <div className="runtime">
          <p>Runtime</p>
          <p>{props.runtime}</p>
        </div>
        <div className="genre">
          <p>Genre</p>
          <p>{props.genre}</p>
        </div>
        <div className="lang">
          <p>Language</p>
          <p>{props.language}</p>
        </div>
        <button onClick={goMovie}>Select Seats</button>
      </section>
    </div>
  );
}

export default MovieCard;
