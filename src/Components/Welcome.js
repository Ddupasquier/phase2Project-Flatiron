import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Welcome({ movies }) {
  return (
    <>
      <div className="home">WELCOME</div>
      <div className="carousel__container">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={10}
          visibleSlides={1}
          currentSlide={1}
        >
          {movies[0] ? (
            <Slider>
              <Slide index={0}>
                <Image src={movies[0].poster} />
                <span>{movies[0].title}</span>
              </Slide>
              <Slide index={1}>
                <Image src={movies[1].poster} />
              </Slide>
              <Slide index={2}>
                <Image src={movies[2].poster} />
              </Slide>
              <Slide index={3}>
                <Image src={movies[3].poster} />
              </Slide>
              <Slide index={4}>
                <Image src={movies[4].poster} />
              </Slide>
              <Slide index={5}>
                <Image src={movies[5].poster} />
              </Slide>
              <Slide index={6}>
                <Image src={movies[6].poster} />
              </Slide>
              <Slide index={7}>
                <Image src={movies[7].poster} />
              </Slide>
              <Slide index={8}>
                <Image src={movies[8].poster} />
              </Slide>
              <Slide index={9}>
                <Image src={movies[9].poster} />
              </Slide>
            </Slider>
          ) : (
            <h2>Loading...</h2>
          )}
          <ButtonBack className="ui animated button">
            <div className="visible content">Back</div>
            <div className="hidden content">
              <i aria-hidden="true" className="arrow left icon"></i>
            </div>
          </ButtonBack>
          <ButtonNext className="ui animated button">
            <div className="visible content">Next</div>
            <div className="hidden content">
              <i aria-hidden="true" className="arrow right icon"></i>
            </div>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </>
  );
}

export default Welcome;
