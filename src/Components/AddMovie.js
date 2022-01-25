import React, { useState } from "react";
import * as MdIcons from "react-icons/md";

function AddMovie({ addNewMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();
  const [runtime, setRuntime] = useState("");
  const [release, setRelease] = useState("");
  const [director, setDirector] = useState("");
  const [writers, setWriters] = useState([]);
  const [actors, setActors] = useState([]);
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        rating: rating,
        runtime: runtime,
        release: release,
        director: director,
        writers: writers,
        actors: actors,
        poster: poster,
        trailer: trailer,
      }),
    })
      .then((r) => r.json())
      .then((newMovie) => {
        setTitle("");
        setRuntime("");
        setDirector("");
        setWriters([]);
        setActors([]);
        setRating("");
        setPoster("");
        setTrailer("");
        setRelease("");
        addNewMovie(newMovie);
      });
  }
  return (
    <div className="ui inverted segment form">
      <h1 style={{ "text-align": "center" }}>
        <MdIcons.MdOutlineLocalMovies /> Add A Movie!!!{" "}
        <MdIcons.MdOutlineLocalMovies />
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="ui input fluid">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
          />
        </div>
        <div className="ui input fluid">
          <input
            onChange={(e) => setRuntime(e.target.value)}
            type="text"
            name="runtime"
            placeholder="Runtime (in min.)"
            value={runtime}
          />
        </div>
        <div className="ui input fluid">
          <input
            onChange={(e) => setDirector(e.target.value)}
            type="text"
            name="director"
            placeholder="Director"
            value={director}
          />
        </div>
        <div className="ui input fluid">
          <input
            onChange={(e) => setWriters(e.target.value.split(","))}
            type="text"
            name="writers"
            placeholder="Writers (separate with a comma)"
            value={writers}
          />
        </div>
        <div className="ui input fluid">
          <input
            onChange={(e) => setActors(e.target.value.split(","))}
            type="text"
            name="actors"
            placeholder="Actors (separate with a comma)"
            value={actors}
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label">http://</div>
          <input
            onChange={(e) => setPoster(e.target.value)}
            type="text"
            name="poster"
            placeholder="Poster URL"
            value={poster}
          />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label">http://</div>
          <input
            onChange={(e) => setTrailer(e.target.value)}
            type="text"
            name="trailer"
            placeholder="Trailer URL"
            value={trailer}
          />
        </div>
        <label htmlFor="select">Rate Movie: </label>
        <select
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          className="fluid"
        >
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
        <label htmlFor="release">Date Released:</label>
        <br />
        <input
          onChange={(e) => setRelease(e.target.value)}
          type="date"
          name="release"
          value={release}
        />
        <br />
        <br />
        <button className="ui button" type="submit">
          Submit Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
