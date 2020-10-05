import React, { useState, useEffect } from "react";
import "./styles.css";

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import LandingBackground from "./components/LandingBackground";
import MoviesGrid from "./components/MoviesGrid";
import MovieModal from "./components/MovieModal";

const { REACT_APP_TMDB_APIKEY } = process.env;

export default function App() {
  const [currentQuery, setCurrentQuery] = useState("");
  const [moviesArray, setMoviesArray] = useState([]);
  const [isModalOn, setIsModalOn] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [favoritesArray, setFavoritesArray] = useState([]);

  function emptyState() {
    setCurrentQuery("");
    setIsModalOn(false);
    setMoviesArray([]);
    setSelectedMovie({});
  }

  function changeQuery(newQuery) {
    setCurrentQuery(newQuery);
  }

  function handleAddToFavorites() {
    favoritesArray.some((favorite) => favorite === selectedMovie.id)
      ? setFavoritesArray((prev) =>
          prev.filter((favorite) => favorite !== selectedMovie.id)
        )
      : setFavoritesArray((prev) => [...prev, selectedMovie.id]);
  }

  async function getMovies() {
    if (currentQuery) {
      const tmdbResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_APIKEY}&language=en-US&query=${currentQuery}&page=1&include_adult=false`
      );
      const tmdbMovies = await tmdbResponse.json();
      console.log(tmdbMovies);

      setMoviesArray(tmdbMovies.results.map((movie) => movie));
    }
  }

  async function getSelectedMovie(movieId) {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_TMDB_APIKEY}&language=en-US`
    );
    const selectedMovie = await movieResponse.json();
    const ratingsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${REACT_APP_TMDB_APIKEY}&language=en-US`
    );
    const selectedMovieRatings = await ratingsResponse.json();
    setSelectedMovie({ ...selectedMovie, ...selectedMovieRatings });
    openModal();
  }

  function openModal() {
    setIsModalOn(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function closeModal() {
    setIsModalOn(false);
  }

  useEffect(() => {
    getMovies();
    console.log(selectedMovie);
  }, [currentQuery, selectedMovie]);

  return (
    <div className="App">
      <Header emptyState={emptyState} />
      {!isModalOn && (
        <SearchBar currentQuery={currentQuery} changeQuery={changeQuery} />
      )}
      {!!currentQuery && !isModalOn ? (
        <MoviesGrid
          currentQuery={currentQuery}
          moviesArray={moviesArray}
          getSelectedMovie={getSelectedMovie}
          favoritesArray={favoritesArray}
        />
      ) : (
        !isModalOn && <LandingBackground />
      )}
      {isModalOn && (
        <MovieModal
          closeModal={closeModal}
          movie={selectedMovie}
          handleAddToFavorites={handleAddToFavorites}
          isFavorite={favoritesArray.some(
            (favorite) => favorite === selectedMovie.id
          )}
        />
      )}
    </div>
  );
}
