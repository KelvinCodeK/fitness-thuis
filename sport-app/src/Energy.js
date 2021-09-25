import React from 'react';
import './Energy.css';

class Energy extends React.Component {

  render() {
  return (
    <div>
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
      <section className="slideSection">
      <div className="slidecontainer">
      <input type="range" min="1" max="10" defaultValue="5" className="slider" />
</div>
      </section>
    </div>
  );}
}

export default Energy;