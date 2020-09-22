import React from 'react';
import DrumPad from './DrumPad';

function DrumArea(props) { 
  const drums = [
    {name: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {name: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {name: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {name: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {name: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {name: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {name: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {name: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    { name: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
  ];
  
  // Drum Machine Controller //
  function playAudioAndAnimate(drumPad, randomColorFn) {
    const audio = drumPad.querySelector('audio');
    const body = document.querySelector('body');
    
    audio.currentTime = 0; //reset audio
    audio.play(); //play audio
    props.changeDisplayText(audio.src.slice(0, -4).split('/').pop()); //change #display text

    //animate pad element and screen 'border'
    body.style.setProperty('background', `radial-gradient(ellipse, #ddd -25%, ${randomColorFn()} 95%)`);
    drumPad.style.setProperty('border', 'solid #ddd 3px');
    setTimeout(() => {
      body.style.setProperty('background', '#000');
      drumPad.style.setProperty('border', '');
    }, 100);
  }
  
  return(
    <div id='drum-area'>
      {drums.map(drum => <DrumPad key={drum.name} name={drum.name} src={drum.src} playAndAnimate={playAudioAndAnimate}/>)}
    </div>
  )
}

export default DrumArea;