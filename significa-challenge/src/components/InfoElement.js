import React from "react";

export default function MovieInfoElement(props) {
  const description = Array.isArray(props.description) ? (
    <ul className="description">
      {props.description.slice(0, 4).map((item, index) => (
        <li key={`${item.id}${index}`}>{item.name}</li>
      ))}
    </ul>
  ) : (
    <p className="description">{props.description}</p>
  );
  return (
    <div className={`${props.name.toLowerCase()} movie-info-element`}>
      <p className="info-heading">{props.name}</p>
      {description}
    </div>
  );
}
