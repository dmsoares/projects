import React from "react";

export default function Header(props) {
  function clickHandler() {
    props.emptyState();
  }
  return (
    <header>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/dmsoares/frontend-challenge/master/layout/2.Exports/2.Logos/logo.svg"
        alt="What's in logo"
        onClick={clickHandler}
      />
    </header>
  );
}
