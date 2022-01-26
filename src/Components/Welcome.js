import React from "react";
import Carousel from "./Carousel";
import HomeIntro from "./HomeIntro";

function Welcome({ movies }) {
  return (
    <>
      <HomeIntro />
      <Carousel movies={movies}/>
    </>
  );
}

export default Welcome;
