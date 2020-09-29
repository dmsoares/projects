import React, { useState, useEffect } from "react";
import MovieCardScreen from "./MovieCardScreen";

export default function MovieCard(props) {
  const [posterURL, setPosterURL] = useState(props.posterURL);
  const [isScreenOn, setIsScreenOn] = useState(false);

  function checkPosterURL() {
    fetch(props.posterURL, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          console.log("Image exists.");
        } else {
          console.log("Image does not exist.");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        setPosterURL(
          "https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/emptyPoster.png"
        );
      });
  }

  function onMouseEnter(e) {
    setIsScreenOn(true);
  }

  function onMouseLeave(e) {
    setIsScreenOn(false);
  }

  useEffect(() => {
    checkPosterURL();
  });

  return (
    <div
      className="movie-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={posterURL} alt={props.title} />
      {props.isFavorite ? (
        <img
          className="heart-full"
          src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-heart-full.svg"
          alt="Empty heart"
        />
      ) : null}
      {isScreenOn && (
        <MovieCardScreen
          id={props.id}
          title={props.title}
          year={props.year}
          openModal={props.openModal}
          isFavorite={props.isFavorite}
        />
      )}
    </div>
  );
}
