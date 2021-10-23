import React from 'react';
import './Energy.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Energy extends React.Component {

  render() {
  return (
    <Router>
    <div>
      <header>
      <Link to="/">
      <button onClick={this.props.home} className="home">
      home
      </button>
      </Link>
      <div className="headerText">
        <h1>
          Fitnessoefeningen voor thuis
        </h1>
        <p>
        Ideale thuisoefeningen geselecteerd op inspanning en spiergroepen
        </p>
      </div>
      </header>
      <main className="centeredSection">
        <img className="energy" alt="Emoticon die weergeeft hoeveel energie jij vandaag hebt" src={this.props.energySmiley} />
        <p>
          Wat is jouw <span>energieniveau</span> vandaag?
        </p>
        <div className="slidecontainer">
        <span className="forFirefox"><input type={"range"} min={0} max={400} defaultValue={200} step={10} onChange={this.props.energyLevel} className="slider" /></span>
        </div>
        <p className="niveau">Niveau: <span>{this.props.currentEnergy}</span></p>
        <button onClick={this.props.energyToSpiergroepen} className="introButtonEen">next</button>
      </main>
    </div>
    </Router>
  );}
}

export default Energy;