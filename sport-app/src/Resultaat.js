import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {

// Willmount, DidMount is te laat.

    


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

  replace(item) {
    const newOefening = item.replace(/_\d/, '');
    return newOefening;
  }

  render() {
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
        schouders_1: [
          'De crunch_1', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
          </ol>, 
          'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=MKmrqcoCZ-M',
          3, 
          10],
          schouders_2: [
            'De crunch_2', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
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
              return <a key={`${x + 1}`} href={'#' + x}><li key={`${x + 2}`}>{x}</li></a>
          })}
        </ul>
          {this.props.spiergroepen.map((x) => {
              return (
              <section key={`${x + 3}`} id={x} className="oefening">
                <h2 key={`${x + 4}`}>{this.replace(x)}</h2>
                <h3 key={`${x + 5}`} className="oefeningUitleg"><span key={`${x + 6}`} >{this.oefeningNaam(x)}</span></h3>
                <div key={`${x + 7}`} className="iframeWidth"> <span>laden...</span>
                <div key={`${x + 8}`} className="iframeContainer"> 
                <iframe key={`${x + 9}`} src={this.src(x)} title="YouTube fitnessoefening voor thuis" frameBorder="0"></iframe>
                </div>
                </div>
                {this.ol(x)}
                {
                <div key={`${x + 10}`} className="herhalingen">
                  <p key={`${x + 11}`} >Sets: <span>{this.herhaling(x)[0]}</span></p>
                  <p key={`${x + 12}`} >Reps per set: <span>{this.herhaling(x)[1]}</span></p>
                </div>
                }
                <button value={x} onClick={this.props.nextOefening} className="introButtonEen">next</button>
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