import React from "react";
import { Link } from "react-router-dom";
import { Slide, Image } from "pure-react-carousel";

function CarouselSlide({ movie, index }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <Slide index={index}>
        <Image src={movie.poster} />
      </Slide>
    </Link>
  );
}

export default CarouselSlide;
