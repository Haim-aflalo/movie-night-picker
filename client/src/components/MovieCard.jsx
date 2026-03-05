import { Link } from "react-router-dom";
function MovieCard(props) {
  return (
    <div className="card">
      <img id="image" src={props.image} />
      <h3>{props.title}</h3>
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
      <div className="nav">
        <Link to={`/movie/${props.id}`}>Select Seats</Link>
      </div>
    </div>
  );
}

export default MovieCard;
