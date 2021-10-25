import React from 'react';
import './Energy.css';
import {Link} from "react-router-dom";
class Energy extends React.Component {

  componentDidMount() {
    this.props.resetAll();
  }

  render() {
  return (
    <div>
      <header>
      <Link to="/">
        <button onClick={this.props.resetAll} className="home">
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
        <Link to="/spiergroepen">
          <button className="introButtonEen">next</button>
        </Link>
      </main>
    </div>
  );}
}

export default Energy;