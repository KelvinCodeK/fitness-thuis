import React from 'react';
import './Intro.css';
import {Link} from "react-router-dom";

class Intro extends React.Component {
  componentDidMount() {
    this.props.resetAll();
  }

  render() {


  return (

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
        <Link className="introButtonMarge" to="/energie">
        <button className="introButtonEen">
        start
        </button>
        </Link>
        </section>
        <section className="saved">
        <div className="animationTwee"></div>
        <p>
          Bekijk jouw meest recente oefeningen!
        </p>
        <Link className="introButtonMarge" to="/oefeningen">
          <button onClick={this.props.toStorageResult} className="introButtonTwee">
            recent
          </button>
        </Link>
        </section>
        <section className="image">
        </section>
      </div>

  );}
}

export default Intro;