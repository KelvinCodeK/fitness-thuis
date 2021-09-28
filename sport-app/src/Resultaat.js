import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {

  // onmount inzetten om te bepalen welke vids etc je wil inladen. Opslaan in this om te koppelen aan component en dan in te laden op de pagina.

  render() {
  return (
    <div className="result">
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
      <section className="oefeningen">
          {this.props.currentEnergy === "knallen!" ? <p>Jij gaat vandaag <span>{this.props.currentEnergy}</span> De onderstaande oefeningen zijn aangepast aan jouw energieniveau.</p>: <p>Jij voelt je vandaag <span>{this.props.currentEnergy}</span>. De onderstaande oefeningen zijn aangepast aan jouw energieniveau.</p>}
          
            <section className="oefeningOverzicht">
          <ul>
          {this.props.spiergroepen.map((x, key) => {
              return <a href={'#' + x}><li key={`${x }`}>{x}</li></a>
          })}
        </ul>
         </section>
          {this.props.spiergroepen.map((x, key) => {
              return (
              <section className="oefening">
                <h4 id={x} key={`${x}`}>{x}</h4>
                <div style={{'width': '200px', 'height': '200px', 'border': '1px solid white'}}></div>
              </section>
              )
          })}
      </section>
    </div>
  );}
}

export default Resultaat;