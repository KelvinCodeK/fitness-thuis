import React from 'react';
import './App.css';
import crunch from './images/crunch3-test.jpg';


// voor yt vids gebruik dit kanaal > https://www.youtube.com/watch?v=6ZJbSZNe370&ab_channel=Sportzorg

function App() {
  return (
    <div className="fullPage">
      <header>
      <button className="home">
      home
      </button>
      <div className="headerText">
        <h1>
          Fitnessoefeningen voor thuis
        </h1>
        <p>
        Ideale thuisoefeningen geselecteerd op inpsanning en spiergroepen
      </p>
      </div>
      </header> 
      <section className="start">
        <div className="animation"></div>
      <p>
        Opzoek naar oefeningen waarmee jij vandaag het beste uit jezelf haalt?
      </p>
      <button className="introButtonEen">
        start
      </button>
      </section>
      <section className="saved">
      <div className="animationTwee"></div>
      <p>
        Eerder deze website bezocht? Bekijk jouw meest recente oefeningen!
      </p>
      <button className="introButtonTwee">
        recent
      </button>
      </section>
      <section className="image">

      </section>
    </div>
  );
}

export default App;