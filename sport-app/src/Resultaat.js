import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {

// Willmount, DidMount is te laat.
  componentWillMount() {
    this.obj = {
      schouders: [
        'De crunch', 
        <ol className="oefeningOL">
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
        </ol>, 
        'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=MKmrqcoCZ-M',
        3, 
        10],
      borst: [
        'De crunch', 
        <ol className="oefeningOL">
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
        </ol>, 
        'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&amp;modestbranding=1',
        3, 
        10],
      rug: [
        'De crunch', 
        <ol className="oefeningOL">
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
        </ol>, 
        'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&amp;modestbranding=1',
        3, 
        10],
      armen: [
        'De crunch', 
        <ol className="oefeningOL">
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
        </ol>, 
        'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&amp;modestbranding=1',
        3, 
        10],
      buikspieren: [
        'De crunch', 
        <ol className="oefeningOL">
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
        </ol>, 
        'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&amp;modestbranding=1',
        3, 
        10],
      benen: [
        'De crunch', 
        <ol className="oefeningOL">
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
          <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
        </ol>, 
        'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&amp;modestbranding=1',
        3, 
        10]
    }
  }

  oefeningNaam(item) {
    return this.obj[item][0];
  }

  ol(item) {
    return this.obj[item][1];
  }

  src(item){
    return this.obj[item][2];
  }

  herhaling(item) {
    let sets = this.obj[item][3];
    let reps = this.obj[item][4];
    switch(this.props.currentEnergy) {
      case 'uitgeput':
        sets -= 1;
        reps -= 5;
        break;
      case 'zwakjes':
        sets -= 1;
        reps -= 2;
        break;
      case 'prima':
        break;
      case 'fit':
        sets += 1;
        reps += 2;
        break;
      case 'knallen!':
        sets += 1;
        reps += 5;
        break;
      default:
        break;
    }
    const herhalingArr = [sets, reps];
    return herhalingArr;
  }

  render() {
  return (
    <div className="result">
      <header className="sticky">
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
          <ul>
          {this.props.spiergroepen.map((x) => {
              return <a href={'#' + x}><li key={`${x }`}>{x}</li></a>
          })}
        </ul>
          {this.props.spiergroepen.map((x) => {
              return (
              <section id={x} className="oefening">
                <h2 key={`${x}`}>{x}</h2>
                <h3 className="oefeningUitleg"><span>{this.oefeningNaam(x)}</span></h3>
                <div className="iframeWidth">
                <div className="iframeContainer">
                <iframe src={this.src(x)} title="YouTube fitnessoefening voor thuis" frameborder="0" allowfullscreen></iframe>
                </div>
                </div>
                {this.ol(x)}
                {
                <div className="herhalingen">
                  <p>Sets: <span>{this.herhaling(x)[0]}</span></p>
                  <p>Reps per set: <span>{this.herhaling(x)[1]}</span></p>
                </div>
                }
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