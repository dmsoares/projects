import React from "react";

export default function SearchBar(props) {
  function handleChange(e) {
    props.changeQuery(e.target.value);
  }

  return (
    <div className="search-bar">
      <img
        className="search-icon"
        src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/1.Icons/icon-magnifier-grey.svg"
        alt="a magnifying glass"
      />
      <input
        type="text"
        placeholder="Search movies..."
        value={props.currentQuery}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}
