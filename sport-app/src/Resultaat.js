import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {

  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

// Willmount, DidMount is te laat.
  componentWillMount() {
    this.obj = {
      schouders: ['shouders tekst', 'schouders src'],
      armen: ['armen tekst', 'armen src']
    }
  }

  test(item) {
    return this.obj[item][0];
  }

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
      <main className="oefeningen">
          {this.props.currentEnergy === "knallen!" 
           ? <p className="oefeningenIntro">Jij gaat vandaag <span>{this.props.currentEnergy}</span> De onderstaande oefeningen zijn aangepast aan jouw energieniveau.</p>
            : <p className="oefeningenIntro">Jij voelt je vandaag <span>{this.props.currentEnergy}</span>. De onderstaande oefeningen zijn aangepast aan jouw energieniveau.</p>}
            <section className="oefeningOverzicht">
          <ul>
          {this.props.spiergroepen.map((x) => {
              return <a href={'#' + x}><li key={`${x }`}>{x}</li></a>
          })}
        </ul>
           </section>
          {this.props.spiergroepen.map((x) => {
              return (
              <section className="oefening">
                <h2 id={x} key={`${x}`}>{x}</h2>
                <p className="oefeningUitleg">Oefening naam</p>
                <div className="iframeWidth">
                <div className="iframeContainer">
                <iframe src="https://www.youtube.com/embed/H0c-4nZjIWQ?modestbranding=1" title="YouTube fitnessoefening voor thuis" frameborder="0" allowfullscreen></iframe>
                </div>
                </div>
                <ol className="oefeningOL">
                <li className="orderedListItem">{this.test(x)}</li>
                <li className="orderedListItem">{this.test(x)}</li>
                <li className="orderedListItem">{this.test(x)}</li>
                </ol>
              </section>
              )
          })}
          <p className="gezondheid">
        De oefeningen zijn bedoeld voor mensen zonder lichamelijke klachten. Twijfel je of je een oefening aankan? Vraag advies aan je fysiotherapeut of arts.
      </p>
      </main>
    </div>
  );}
}

export default Resultaat;