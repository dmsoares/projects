import './App.css';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startStopTimer,
  resetTimer,
  elapseOneSecond,
  toggleSession,
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak
  } from './redux'

import Header from './components/Header'
import Timer from './components/Timer'
import Settings from './components/Settings'
import Footer from './components/Footer'

function App() {
  const sessionLength = useSelector((state) => state.settings.session);
  const breakLength = useSelector((state) => state.settings.break);
  const isTimerOn = useSelector((state) => state.timer.isTimerOn);
  const isSessionOn = useSelector((state) => state.timer.isSessionOn);
  const timeLeft = useSelector((state) => state.timer.timeLeft);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Timer
        sessionLength={sessionLength}
        breakLength={breakLength}
        timeLeft={timeLeft}
        isTimerOn={isTimerOn}
        isSessionOn={isSessionOn}
        startStopTimer={() => dispatch(startStopTimer())}
        resetTimer={() => dispatch(resetTimer())}
        elapseOneSecond={() => dispatch(elapseOneSecond())}
        toggleSession={() => dispatch(toggleSession())}
      />
      <Settings
        sessionLength={sessionLength}
        breakLength={breakLength}
        isTimerOn={isTimerOn}
        incrementSession={() => dispatch(incrementSession())}
        decrementSession={() => dispatch(decrementSession())}
        incrementBreak={() => dispatch(incrementBreak())}
        decrementBreak={() => dispatch(decrementBreak())}
      />
      <Footer />
    </>
  );
}

export default App