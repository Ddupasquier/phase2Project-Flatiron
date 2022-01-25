import React, { useState } from "react";
import Movie from "./Movie";

function MovieList({ movies }) {
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");

  const sortedMovies = [...movies].sort(compare);

  const searchMovies = sortedMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  function compare(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  }

  const movieComponents = searchMovies.map((movie) => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        rating={movie.rating}
        title={movie.title}
        director={movie.director}
        runtime={movie.runtime}
      />
    );
  });

  return (
    <>
      <p>Sort By:</p>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">None</option>
        <option value="title">Title</option>
        <option value="rating">Rating</option>
      </select>
      <br></br>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      ></input>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Rating</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Title</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Director</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Runtime</h3>
            </th>
          </tr>
        </tbody>
      </table>
      <div className="trailer">{movieComponents}</div>
    </>
  );
}

export default MovieList;
