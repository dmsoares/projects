import React from 'react'

function SettingsItem(props) {
  function handleClick(e) {
    if (
      e.target.id === `${props.name}-increment` &&
      props.length < 60 &&
      props.isTimerOn === false
    )
      props.increment();
    if (
      e.target.id === `${props.name}-decrement` &&
      props.length > 1 &&
      props.isTimerOn === false
    )
      props.decrement();
  }

  return (
    <div id={props.name} className="settings-item">
      <div id={`${props.name}-length`}>{props.length}</div>
      <div className="settings-controller">
        <div
          id={`${props.name}-decrement`}
          className="operator"
          onClick={handleClick}
        >
          -
        </div>
        <div id={`${props.name}-label`}>{props.name}</div>
        <div
          id={`${props.name}-increment`}
          className="operator"
          onClick={handleClick}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default SettingsItem