import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {

  render() {
  return (
    <div>
      <header>
      <button onClick={this.props.home} className="home">
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
      <section className="centeredSection">
          {this.props.currentEnergy === "knallen!" ? <p>Jij gaat vandaag <span>{this.props.currentEnergy}</span> De onderstaande oefeningen zijn aangepast aan jouw energieniveau.</p>: <p>Jij voelt je vandaag <span>{this.props.currentEnergy}</span>. De onderstaande oefeningen zijn aangepast aan jouw energieniveau.</p>}
          {this.props.spiergroepen.map((x, key) => {
              return <p key={`${x }` + `${key}`}>{x}</p>
          })}
      </section>
    </div>
  );}
}

export default Resultaat;