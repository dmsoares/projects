import React from 'react';
import './App.css';
import Calculator from './components/Calculator'

function Footer() {
  return (
    <footer>
      <div>
        Made by{" "}
        <span>
          <a href="https://codepen.io/dmsoares">Decio</a>
        </span>{" "}
        for the <a href="https://freecodecamp.org">FCC</a> JavaScript Calculator
        Challenge
      </div>
      <div>
        Design inspired by
        <a href="https://dribbble.com/shots/12501033-Calculator-Daily-UI-004">
          {" "}
          Isha Godara
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;