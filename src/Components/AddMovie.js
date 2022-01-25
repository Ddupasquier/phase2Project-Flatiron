import React, { useState } from 'react';


function AddMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [runtime, setRuntime] = useState("");
    const [release, setRelease] = useState("");
    const [director, setDirector] = useState("");
    const [writers, setWriters] = useState("");
    const [actors, setActors] = useState([]);
    const [poster, setPoster] = useState("");
    const [trailer, setTrailer] = useState("");
    const [movieSubmission, setMovieSubmission] = useState({});
    function handleSubmit(e) {
      e.preventDefault();
      setMovieSubmission({
        title: title,
        rating: rating,
        runtime: runtime,
        release: release,
        director: director,
        writers: writers,
        actors: actors,
        poster: poster,
        trailer: trailer,
      });
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Title"
            value={title}
          />
          <br />
          <input
            onChange={(e) => setRuntime(e.target.value)}
            type="text"
            name="runtime"
            placeholder="Runtime"
            value={runtime}
          />
          <br />
          <input
            onChange={(e) => setDirector(e.target.value)}
            type="text"
            name="director"
            placeholder="Director"
            value={director}
          />
          <br />
          <input
            onChange={(e) => setWriters(e.target.value)}
            type="text"
            name="writers"
            placeholder="Writers"
            value={writers}
          />
          <br />
          <input
            onChange={(e) => setActors(e.target.value.split(","))}
            type="text"
            name="actors"
            placeholder="Actors"
            value={actors}
          />
          <br />
          <input
            onChange={(e) => setPoster(e.target.value)}
            type="text"
            name="poster"
            placeholder="Poster"
            value={poster}
          />
          <br />
          <input
            onChange={(e) => setTrailer(e.target.value)}
            type="text"
            name="trailer"
            placeholder="Trailer"
            value={trailer}
          />
          <br />
          <label htmlFor="select">Select Rating: </label>
          <select onChange={(e) => setRating(e.target.value)} value={rating}>
            <option value=""></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
          <br />
          <label htmlFor="release">Set Release Date</label>
          <br />
          <input
            onChange={(e) => setRelease(e.target.value)}
            type="date"
            name="release"
            value={release}
          />
          <br />
          <button type="submit">Submit Movie</button>
        </form>
      </div>
    );
}

export default AddMovie;