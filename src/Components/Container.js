import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import TopMovies from "./TopMovies";

function Container() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/movies")
      .then((resp) => resp.json())
      .then((receivedMovies) => setMovies(receivedMovies));
  }, []);

  return (
    <div id="container">
      <Switch>
        <Route path="/movies/new">
          <AddMovie />
        </Route>
        <Route path="/movies/top">
          <TopMovies />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route exact path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="*">
          <h1>404: You done goofed</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
