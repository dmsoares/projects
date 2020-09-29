import React from "react";

export default function MovieCardScreen(props) {
  function handleClick() {
    props.openModal(props.id);
  }

  return (
    <div className="movie-card-screen" onClick={handleClick}>
      <h1>
        {props.title
          ? props.title.length > 30
            ? `${props.title.slice(0, 30)}...`
            : props.title
          : null}
      </h1>
      {props.year ? <p>{props.year.split("-").slice(0, 1)}</p> : "-"}
      {props.isFavorite ? (
        <img
          className="heart-full"
          src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-heart-full.svg"
          alt="Empty heart"
        />
      ) : (
        <img
          className="heart-empty-white"
          src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-heart-white.svg"
          alt="Empty heart"
        />
      )}
    </div>
  );
}
