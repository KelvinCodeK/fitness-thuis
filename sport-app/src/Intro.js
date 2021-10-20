import React from 'react';
import './Intro.css';
class Intro extends React.Component {

  render() {
  return (
    <div className="fullPage">
      <header>
      <button className="homeIntro">
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
      <section className="start">
        <div className="animation"></div>
      <p>
        Opzoek naar nieuwe oefeningen waarmee jij vandaag het beste uit jezelf haalt?
      </p>
      <button onClick={this.props.toEnergy} className="introButtonEen">
        start
      </button>
      </section>
      <section className="saved">
      <div className="animationTwee"></div>
      <p>
        Bekijk jouw meest recente oefeningen!
      </p>
      <button onClick={this.props.toStorageResult} className="introButtonTwee">
        recent
      </button>
      </section>
      <section className="image">
      </section>
    </div>
  );}
}

export default Intro;