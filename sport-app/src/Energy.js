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
        Ideale thuisoefeningen geselecteerd op inspanning en spiergroepen
      </p>
      </div>
      </header>
      <section className="slideSection">
        <img className="energy" alt="Emoticon die weergeeft hoeveel energie jij vandaag hebt" src={this.props.energySmiley} />
        <p>
          Wat is jouw energyniveau vandaag?
        </p>
        <div className="slidecontainer">
        <span className="forFirefox"><input type={"range"} min={0} max={400} defaultValue={200} step={10} onChange={this.props.energyLevel} className="slider" /></span>
        </div>
        <p className="niveau">Nivea: <span>{this.props.currentEnergy}</span></p>
        <button className="introButtonEen">next</button>
      </section>
    </div>
  );}
}

export default Energy;