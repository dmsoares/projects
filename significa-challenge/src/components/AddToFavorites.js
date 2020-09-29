import React, { useRef, useEffect } from "react";

export default function AddToFavorites({ handleAddToFavorites, isFavorite }) {
  const favorite = useRef(null);
  const notFavorite = useRef(null);
  const heartGrey = useRef(null);
  const heartWhite = useRef(null);

  function handleMouseEnter() {
    const children = notFavorite.current.childNodes;
    children.forEach((child) => child.classList.add("onHover"));
    heartGrey.current.style.display = "none";
    heartWhite.current.style.display = "block";
  }
  function handleMouseLeave() {
    const children = notFavorite.current.childNodes;
    children.forEach((child) => child.classList.remove("onHover"));
    heartGrey.current.style.display = "block";
    heartWhite.current.style.display = "none";
  }
  function handleClick() {
    handleAddToFavorites();
  }

  useEffect(() => {
    if (isFavorite) {
      favorite.current.style.display = "flex";
      notFavorite.current.style.display = "none";
    } else {
      favorite.current.style.display = "none";
      notFavorite.current.style.display = "flex";
    }
  });

  return (
    <div className="lg-button add-to-favorites">
      <div ref={favorite} className="lg-button favorite" onClick={handleClick}>
        <img
          className="lg-button-logo"
          src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-heart-full.svg"
          alt="Full heart"
          style={{ width: "39px" }}
        />
        <div className="lg-button-text">
          <p>Added</p>
        </div>
      </div>
      <div
        ref={notFavorite}
        className="lg-button not-favorite"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          ref={heartGrey}
          className="lg-button-logo heart-grey"
          src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-heart-grey.svg"
          alt="Empty heart"
          style={{ width: "39px" }}
        />
        <img
          ref={heartWhite}
          className="lg-button-logo heart-white"
          src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-heart-white.svg"
          alt="Empty heart"
          style={{ width: "39px" }}
        />
        <div className="lg-button-text">
          <p>Add to favorites</p>
        </div>
      </div>
    </div>
  );
}
