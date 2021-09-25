import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Intro';
import Energy from './Energy';

ReactDOM.render(
  <React.StrictMode>
    <Energy />
    {/* <footer>
      <p>
        De oefeningen zijn bedoeld voor mensen zonder lichamelijke klachten. Twijfel je of je een oefening aankan? Vraag advies aan je fysiotherapeut of arts.
      </p>
    </footer> */}
  </React.StrictMode>,
  document.getElementById('root')
);