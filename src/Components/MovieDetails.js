import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/movies/${id}`)
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

  return (
    <div>
      <button><Link to="/movies">Back</Link></button><br/>
      <img src={poster} />
      <p>{title}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      <p>{release}</p>
      <p>{director}</p>
    </div>
  );
}

export default MovieDetails;