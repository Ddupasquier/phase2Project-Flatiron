import React from "react";
import CarouselSlide from "./CarouselSlide";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel({ movies }) {
  const slideLinks = movies.map((movie, index) => {
    return <CarouselSlide key={movie.id} movie={movie} index={index} />;
  });

  return (
    <div className="carousel__container">
      <CarouselProvider
        naturalSlideWidth={45}
        naturalSlideHeight={75}
        totalSlides={movies.length}
        visibleSlides={5}
        currentSlide={0}
        interval={2000}
        isPlaying={true}
        isIntrinsicHeight={false}
      >
        {/* Carousel Buttons */}
        <ButtonBack className="ui animated button left">
          <div className="visible content">Back</div>
          <div className="hidden content">
            <i aria-hidden="true" className="arrow left icon"></i>
          </div>
        </ButtonBack>
        <ButtonNext className="ui animated button right">
          <div className="visible content">Next</div>
          <div className="hidden content">
            <i aria-hidden="true" className="arrow right icon"></i>
          </div>
        </ButtonNext>

        {/* Slider & Slides */}
        {movies[0] ? (
          <Slider>
            {/* <Link to={`/movies/${movies[0].id}`}>
              <Slide index={0}>
                <Image src={movies[0].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[1].id}`}>
              <Slide index={1}>
                <Image src={movies[1].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[2].id}`}>
              <Slide index={2}>
                <Image src={movies[2].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[3].id}`}>
              <Slide index={3}>
                <Image src={movies[3].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[4].id}`}>
              <Slide index={4}>
                <Image src={movies[4].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[5].id}`}>
              <Slide index={5}>
                <Image src={movies[5].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[6].id}`}>
              <Slide index={6}>
                <Image src={movies[6].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[7].id}`}>
              <Slide index={7}>
                <Image src={movies[7].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[8].id}`}>
              <Slide index={8}>
                <Image src={movies[8].poster} />
              </Slide>
            </Link>
            <Link to={`/movies/${movies[9].id}`}>
              <Slide index={9}>
                <Image src={movies[9].poster} />
              </Slide>
            </Link> */}
            {slideLinks}
          </Slider>
        ) : (
          <h2>Loading...</h2>
        )}
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
