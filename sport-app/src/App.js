import React from 'react';
import './App.css';
import crunch from './images/crunch3.jpg';


// voor yt vids gebruik dit kanaal > https://www.youtube.com/watch?v=6ZJbSZNe370&ab_channel=Sportzorg

function App() {
  return (
    <div className="fullPage">
      <header>
      <button className="home">
      home
      </button>
      <div>
        <h1>
          Fitnessoefeningen voor thuis
        </h1>
        <p>
        Ideale thuisoefeningen geselecteerd op inpsanning en spiergroepen
      </p>
      </div>
      </header> 
      <section className="start">
      <p>
        Opzoek naar oefeningen waarmee jij vandaag het beste uit jezelf haalt?
      </p>
      <button className="introButtonEen">
        start
      </button>
      </section>
      <section className="saved">
      <p>
        Eerder deze website bezocht? Bekijk jouw meest recente oefeningen!
      </p>
      <button className="introButtonTwee">
        recent
      </button>
      </section>
      <section className="image">
        <img src={crunch}/>
      </section>
    </div>
  );
}

export default App;