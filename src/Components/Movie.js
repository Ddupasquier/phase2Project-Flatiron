import React from "react";
import { Link } from "react-router-dom";

function Movie({ id, rating, title, director, runtime }) {
  return (
    <tr>
      <td>{rating}</td>
      <td>
        <Link style={{ color: "rgb(114, 186, 186)" }} to={`/movies/${id}`}>
          {title}
        </Link>
      </td>
      <td>{director}</td>
      <td>{runtime} minutes</td>
    </tr>
  );
}

export default Movie;
