import React from 'react';
import './App.css';
import Display from './components/Display';
import Slider from './components/Slider';
import DrumArea from './components/DrumArea';

// Design inspired by: https://dribbble.com/shots/8031449-Drumpad-iOs-App/
// (Not ideal) Solution for color change without requestAnimationFrame():
// https://github.com/kirupa/kirupa/blob/master/animations/simple_random_color_changer.htm

function App() {
  const [displayText, setDisplayText] = React.useState('Drum Machine');
  const [bpm, setBpm] = React.useState(60);
  
  function changeDisplayText(text) {
    setDisplayText(text);
  }
  function changeBpm(value) {
    setBpm(value);
  }
  
  return(
    <div id='drum-machine'>
      <Display text={displayText}/>
      <DrumArea changeDisplayText={changeDisplayText}/>
      <Slider bpm={bpm} changeBpm={changeBpm}/>
    </div>
  );
}

export default App;
