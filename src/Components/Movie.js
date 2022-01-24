import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ id, rating, title, director, runtime }) {
    return (
        <tr>
            <td>{rating}</td>
            <td><Link to={`/movies/${id}`}>{title}</Link></td>
            <td>{director}</td>
            <td>{runtime}</td>
        </tr>
    );
}

export default Movie;