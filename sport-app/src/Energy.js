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
      <p style={{'opacity': this.props.energyLevelLeft}}>
       afbeelding 1
      </p>
      <p style={{'opacity': this.props.energyLevelRight}}>
       afbeelding 2
      </p>
      <div className="slidecontainer">
      <input type="range" min="0" max="1" step="0.1" defaultValue="0.5" onChange={this.props.energyFunc}className="slider" list="rangeData" />
</div>
      </section>
    </div>
  );}
}

export default Energy;