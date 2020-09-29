import React from "react";
import Heading from "./MovieModalHeading";
import MovieTitle from "./MovieModalTitle";
import Ratings from "./Ratings";
import Rating from "./Rating";
import AddToFavorites from "./AddToFavorites";
import InfoSection from "./InfoSection";
import InfoElement from "./InfoElement";

export default function MovieModal({
  closeModal,
  movie,
  handleAddToFavorites,
  isFavorite
}) {
  console.log(movie);

  function handleClick({ target }) {
    if (target.className === "arrow-white") closeModal();
  }

  function handleMouseEnter() {
    document.querySelector(".arrow-grey").style.display = "none";
    document.querySelector(".arrow-white").style.display = "block";
  }

  function handleMouseLeave() {
    document.querySelector(".arrow-grey").style.display = "block";
    document.querySelector(".arrow-white").style.display = "none";
  }

  return (
    <div className="movie-modal">
      <img
        className="arrow-grey"
        src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-arrow-grey.svg"
        alt="exit arrow"
        onMouseEnter={handleMouseEnter}
      />
      <img
        className="arrow-white"
        src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-arrow-white.svg"
        alt="exit arrow"
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      />
      <div className="container">
        <section className="movie-info">
          <Heading runtime={movie.runtime} releaseDate={movie.release_date} />
          <MovieTitle title={movie.original_title} />
          <Ratings>
            <Rating
              name="imdb"
              logoSrc="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/2.Logos/logo-imdb.svg"
              bgColor="#ff9f1c"
            />
            <Rating
              name="rotten-tomatoes"
              logoSrc="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/2.Logos/logo-rotten-tomatoes.svg"
              bgColor="#ff4040"
            />
            <AddToFavorites
              handleAddToFavorites={handleAddToFavorites}
              isFavorite={isFavorite}
            />
          </Ratings>
          <InfoElement name="Plot" description={movie.overview} />
          <InfoSection>
            <InfoElement name="Cast" description={movie.cast} />
            <InfoElement name="Genre" description={movie.genres} />
            <InfoElement
              name="Director"
              description={movie.crew.filter(
                (item) => item.department === "Directing"
              )}
            />
          </InfoSection>
        </section>
        <section className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </section>
      </div>
    </div>
  );
}
