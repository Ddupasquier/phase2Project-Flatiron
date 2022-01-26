import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as FcIcon from "react-icons/fc";

function MovieDetails({ updateMovie }) {
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

  function handleLikes(string) {
    let likes = movie.likes;
    string === "like" ? (likes += 1) : (likes -= 1);
    console.log(likes);
    fetch(`http://localhost:8001/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes }),
    })
      .then((resp) => resp.json())
      .then((updatedMovie) => {
        updateMovie(updatedMovie);
        setMovie(updatedMovie);
      });
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
    likes,
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
        <p style={{color: "yellow"}}><b>{likes}</b> Likes</p>
        <p>
          <button onClick={() => handleLikes("like")}>
            <FcIcon.FcLike />
          </button>{" "}
          <button onClick={() => handleLikes("dislike")}>
            <FcIcon.FcDislike />
          </button>
        </p>

        <div className="iframe">
          <iframe
            style={{ border: "3px solid teal" }}
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
