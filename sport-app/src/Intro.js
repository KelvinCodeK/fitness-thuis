import React from 'react';
import './Intro.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './index';
import Energy from './Energy';

class Intro extends React.Component {

  render() {
  return (
    <Router>
      <div className="fullPage">
        <header>
        <Link to="/">
          <button className="homeIntro">
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
        <section className="start">
          <div className="animation"></div>
        <p>
          Opzoek naar nieuwe oefeningen waarmee jij vandaag het beste uit jezelf haalt?
        </p>
        <Link onClick={this.props.toEnergy} to="/energie">
        <button  className="introButtonEen">
          start
        </button>
        </Link>
        </section>
        <section className="saved">
        <div className="animationTwee"></div>
        <p>
          Bekijk jouw meest recente oefeningen!
        </p>
        <Link to="/oefeningen">
        <button onClick={this.props.toStorageResult} className="introButtonTwee">
          recent
        </button>
        </Link>
        </section>
        <section className="image">
        </section>

        <Switch>
        <Route path="/energie"  /> 

        </Switch>
      </div>
    </Router>
  );}
}

export default Intro;