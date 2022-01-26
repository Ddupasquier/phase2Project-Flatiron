import React from "react";
import Card from "./Card";

function TopMovies({ movies }) {
  const sortedMovies = [...movies].sort(compare);
  const length = sortedMovies.length;
  const topTenMovies = [];
  const bottomTenMovies = [];

  buildTopTen();
  buildBottomTen();

  function compare(a, b) {
    if (parseInt(a.likes) < parseInt(b.likes)) {
      return -1;
    }
    return 0;
  }

  function buildBottomTen() {
    for (let i = 0; i < 10; i++) {
      bottomTenMovies.push(sortedMovies[i]);
    }
  }

  function buildTopTen() {
    for (let i = length - 1; i > length - 11; i--) {
      topTenMovies.push(sortedMovies[i]);
    }
  }

  const topComponents = topTenMovies.map((movie) => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster}
        likes={movie.likes}
      />
    );
  });

  const bottomComponents = bottomTenMovies.map((movie) => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster}
        likes={movie.likes}
      />
    );
  });

  return (
    <div className="topmovies">
      <div>
        <h2>Top 10 Movies</h2>
        <hr />
      </div>
      <div>
        <h2>Bottom 10 Movies</h2>
        <hr />
      </div>

      <div id="top10" className="ui segment">
        {topComponents}
      </div>

      <div id="bottom10" className="ui segment">
        {bottomComponents}
      </div>
    </div>
  );
}

export default TopMovies;
