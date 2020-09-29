import React from "react";

export default function Rating(props) {
  return (
    <div className="lg-button rating">
      <img
        className="lg-button-logo"
        src={props.logoSrc}
        alt={`${props.name} logo`}
        style={{ background: props.bgColor }}
      />
      <div className="lg-button-text">
        <p>7.6/10</p>
      </div>
    </div>
  );
}
