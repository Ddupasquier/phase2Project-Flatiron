import React from 'react';
import { Link } from "react-router-dom"

function Card({ id, title, poster, likes }) {
    return ( 
    <div className="ui card">
    <Link to={`/movies/${id}`} className="image">
      <img
        className="cardImage"
        src={poster}
        alt={title}
      />
    </Link>
    <div className="content">
      <h3>{title}</h3>
      <div className="meta">
        <p>{likes}</p>
      </div>
    </div>
  </div> 
  );
}

export default Card;