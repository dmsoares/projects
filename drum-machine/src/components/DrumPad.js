import React, {useState, useEffect} from 'react';

function DrumPad(props) {
  const [style, setStyle] = useState({background: 'grey'});
  
  // Style functions //
  function getRandomColor() {
    const colorsArray = ['#f9fd50', '#85ef47', '#00bd56', '#207dff'];
    const randNum = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randNum];
  }
  function changeStyle() {
    setStyle({background: `radial-gradient(ellipse, #ddd -50%, ${getRandomColor()} 95%)`});
  }  
  
  // Event handlers //
  function handleClick(event) {
    props.playAndAnimate(event.target, getRandomColor);
  }
  function handleKeydown(event) {
    if(['q','w','e','a','s','d','z','x','c'].includes(event.key.toLowerCase())){
      const audio = document.querySelector(`#${event.key.toUpperCase()}`);
      const drumPad = audio.parentElement;

      props.playAndAnimate(drumPad, getRandomColor);
    }
  }
  
  useEffect(() => {
    const drumPad = document.querySelector(`#${props.name}-pad`);
    drumPad.addEventListener('animationiteration', changeStyle, false);
    document.addEventListener('keydown', handleKeydown);
    
    changeStyle();
  }, []); // run only on mount

  return(
    <div
      onClick={handleClick}
      id={`${props.name}-pad`}
      className='drum-pad'
      style={style}>{props.name}
      <audio
        id={props.name}
        className='clip'
        src={props.src}
        type="audio/mp3" />
    </div>
  )
}

export default DrumPad;