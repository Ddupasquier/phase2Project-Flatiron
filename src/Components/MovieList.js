import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function MovieList({ movies }) {
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const sortedMovies = [...movies].sort(compare);

  const searchMovies = sortedMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  function compare(a, b) {
    if (sortBy === "runtime") {
      if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
        return -1;
      }
      return 0;
    }
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
      <div className="ui segment inverted">
        <div className="ui action input fluid">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="ui compact selection dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="rating">Rating</option>
            <option value="director">Director</option>
            <option value="runtime">Runtime</option>
          </select>
        </div>
      </div>
      <table className="ui celled striped padded table inverted">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header inverted">Rating</h3>
            </th>
            <th>
              <h3 className="ui center aligned header inverted">Title</h3>
            </th>
            <th>
              <h3 className="ui center aligned header inverted">Director</h3>
            </th>
            <th>
              <h3 className="ui center aligned header inverted">Runtime</h3>
            </th>
          </tr>
          {movieComponents}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
