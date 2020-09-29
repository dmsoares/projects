import React from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid(props) {
  return (
    <div className="movies-grid">
      {props.moviesArray.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          posterURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.original_title}
          year={movie.release_date}
          isFavorite={props.favoritesArray.some(
            (favorite) => favorite === movie.id
          )}
          openModal={props.getSelectedMovie}
        />
      ))}
    </div>
  );
}
