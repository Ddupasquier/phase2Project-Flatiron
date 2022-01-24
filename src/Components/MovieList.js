import React from "react";
import Movie from "./Movie";

function MovieList({ movies }) {
  const movieComponents = movies.map((movie) => {
    return (
      <Movie
        id={movie.id}
        rating={movie.rating}
        title={movie.title}
        director={movie.director}
        runtime={movie.runtime}
      />
    );
  });

  return (
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
        {movieComponents}
      </tbody>
    </table>
  );
}

export default MovieList;
