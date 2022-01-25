import React from "react";
import { Link } from "react-router-dom";
function TopMovies() {
  return (
    <div className="topmovies">
      <div className="day">
        <h2>Top 10 Movies</h2>
      </div>
      <div className="month">
        <h2>Bottom 10 Movies</h2>
      </div>
      <div className="year">
        <div class="ui card">
          <Link className="image">
            <img
              className="cardImage"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlDKRNksTPneIfs6kexQxt4E-WWbN13h0GD5pAUaT6N4sN16Gg"
              alt="movietitle"
            />
          </Link>
          <div class="content">
            <h3>Steve Jobs</h3>
            <div class="meta">
              <p>Last Seen 2 days ago</p>
            </div>
          </div>
        </div>
        <div class="ui card">
          <Link className="image">
            <img
              className="cardImage"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlDKRNksTPneIfs6kexQxt4E-WWbN13h0GD5pAUaT6N4sN16Gg"
              alt="movietitle"
            />
          </Link>
          <div class="content">
            <p>Steve Jobs</p>
            <div class="meta">
              <p>Last Seen 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="daymovie">cards</div>
    </div>
  );
}

export default TopMovies;
