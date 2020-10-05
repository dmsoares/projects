import React, { useState, useEffect} from 'react'

function Timer(props) {
  const timeLeft = props.timeLeft;
  const isTimerOn = props.isTimerOn;
  const isSessionOn = props.isSessionOn;

  const [currentLength, setCurrentLength] = useState(
    props.sessionLength * 60
  );
  const alarmSound = document.querySelector("#beep");

  const playIcon = "far fa-play-circle button";
  const pauseIcon = "far fa-pause-circle button";
  const rootElement = document.documentElement;

  let seconds = String(Math.floor(timeLeft % 60)).padStart(2, "0");
  let minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");

  function handleClick(e) {
    const targetId = e.target.id;
    if (targetId === "start_stop") {
      props.startStopTimer();
    }
    if (targetId === "reset") {
      props.resetTimer();
      alarmSound.pause();
      alarmSound.currentTime = 0;
      rootElement.style.setProperty(
        "--percent",
        `${0}`
      );
    }
  }

  useEffect(() => {
    if (isSessionOn) {
      setCurrentLength(props.sessionLength * 60);
    } else setCurrentLength(props.breakLength * 60);

    if (timeLeft > 0) {
      if (isTimerOn) {
        var intervalID = setInterval(() => {
          props.elapseOneSecond();
          rootElement.style.setProperty(
            "--percent",
            `${timeLeft / currentLength - 1}`
          );
        }, 1000);
      }
    }

    if (timeLeft === 0) {
      props.toggleSession();
      alarmSound.play();
    }

    return function cleanup() {
      clearInterval(intervalID);
    };
  }, [isSessionOn, props, timeLeft, isTimerOn, rootElement.style, currentLength, alarmSound]);

  return (
    <div id="timer">
      <svg>
        <circle />
        <circle />
      </svg>
      <i
        id="reset"
        className="button fas fa-redo-alt"
        onClick={handleClick}
      ></i>
      <div id="time-left">
        {minutes}:{seconds}
      </div>
      <div id="timer-label" className={(!isSessionOn && "break").toString()}>
        {isSessionOn ? "- session -" : "- break -"}
      </div>
      <i
        id="start_stop"
        className={isTimerOn ? pauseIcon : playIcon}
        onClick={handleClick}
      ></i>
    </div>
  );
}

export default Timer