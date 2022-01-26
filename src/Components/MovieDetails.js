import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as FcIcon from "react-icons/fc"

function MovieDetails({handleLikes}) {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8001/movies/${id}`)
      .then((resp) => resp.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (movie === null) {
    return <h1>Loading...</h1>;
  }

  const {
    title,
    rating,
    runtime,
    release,
    director,
    writers,
    actors,
    poster,
    trailer,
  } = movie;

  console.log(trailer);

  return (
    <>
    <button className="ui animated button">
        <Link to="/movies" className="back">
          <div className="visible content">Back To Movies</div>
          <div className="hidden content">
            <i aria-hidden="true" className="arrow left icon"></i>
          </div>
        </Link>
      </button>
    <div className="ui segment inverted">
      
      <img className="poster" src={poster} alt={title} />
      <h2>{title}</h2>
      <p>
        Rating: <b>{rating}</b>
      </p>
      <p>Runtime: {runtime}</p>
      <p>Release Date: {release}</p>
      <p>Directed By: {director}</p>
      <p>Written By: {writers.join(", ")}</p>
      <p>Starring: {actors.join(", ")}</p>
      <p><button onClick={() => handleLikes(movie, "like")}><FcIcon.FcLike /></button>{" "}<button onClick={() => handleLikes(movie, "dislike")}><FcIcon.FcDislike /></button></p>
      
      <div className="iframe">
      <iframe
      style={{border: "3px solid teal"}}
        src={trailer}
        height="400px"
        width="625px"
        title="movie trailer"
      ></iframe>
      </div>
    </div>
    </>
  );
}

export default MovieDetails;
