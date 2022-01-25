import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieDetails() {
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
    <div>
      {/* <button className="ui secondary button back">
        
      </button> */}
      <button class="ui animated button">
        <Link to="/movies" className="back">
          <div class="visible content">Back To Movies</div>
          <div class="hidden content">
            <i aria-hidden="true" class="arrow left icon"></i>
          </div>
        </Link>
      </button>
      <br />
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>
        Rating: <b>{rating}</b>
      </p>
      <p>Runtime: {runtime}</p>
      <p>Release Date: {release}</p>
      <p>Directed By: {director}</p>
      <p>Written By: {writers.join(", ")}</p>
      <p>Starring: {actors.join(", ")}</p>
      <iframe
        src={trailer}
        height="400px"
        width="600px"
        title="movie trailer"
      ></iframe>
    </div>
  );
}

export default MovieDetails;
