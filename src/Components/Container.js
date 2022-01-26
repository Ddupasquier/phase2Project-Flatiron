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
      .then((receivedMovies) => setMovies(receivedMovies.reverse()));
  }, []);

  function addNewMovie(newMovie) {
    const newMovieList = [newMovie, ...movies];
    setMovies(newMovieList);
  }

  function updateMovie(updatedMovie) {
    const updatedList = movies.map((movie) => {
      if (movie.id === updatedMovie.id) {
        return updatedMovie;
      }
      return movie;
    });
    setMovies(updatedList);
  }

  // function handleLikes(movie, string) {
  //   let likes = movie.likes;
  //   string === "like" ? (likes += 1) : (likes -= 1);
  //   console.log(likes);
  //   fetch(`http://localhost:8001/movies/${movie.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ likes: likes }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((updatedMovie) => updateMovie(updatedMovie));
  // }

  return (
    <div id="container">
      <Switch>
        <Route path="/movies/new">
          <AddMovie addNewMovie={addNewMovie} />
        </Route>
        <Route path="/movies/top">
          {movies.length > 0 ? (
            <TopMovies movies={movies} />
          ) : (
            <h2>Loading...</h2>
          )}
        </Route>
        <Route path="/movies/:id">
          <MovieDetails updateMovie={updateMovie} />
        </Route>
        <Route exact path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route path="/">
          <Welcome movies={movies} />
        </Route>
        <Route path="*">
          <h1>404: You done goofed</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
