import React from "react";

export default function Heading(props) {
  return (
    <div className="heading">
      <h2>
        {props.runtime} min <span className="dot">&#8226;</span>{" "}
        {props.releaseDate.split("-").slice(0, 1)}{" "}
        <span className="dot">&#8226;</span> <span className="r-rated">R</span>
      </h2>
    </div>
  );
}
