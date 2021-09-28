import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Intro';
import Energy from './Energy';
import Spiergroepen from './Spiergroepen';
import Resultaat from './Resultaat';
import veryTired from './images/veryTired.png';
import tired from './images/tired.png';
import neutral from './images/neutral.png';
import goodEnergy from './images/goodEnergy.png';
import highEnergy from './images/highEnergy.png';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     introToEnergy: false,
     energyToSpiergroepen: false,
     spiergroepenToResultaat: false,
     energyLevel: neutral,
     energyPara: 'prima',
     spiergroepen: []
    }
    this.energy = this.energy.bind(this);
    this.toEnergy = this.toEnergy.bind(this);
    this.home = this.home.bind(this);
    this.toSpiergroepen = this.toSpiergroepen.bind(this);
    this.spiergroepenChecked = this.spiergroepenChecked.bind(this);
    this.toResultaat = this.toResultaat.bind(this);
  }

  home() {
    this.setState({introToEnergy: false, energyToSpiergroepen: false, energyLevel: neutral, energyPara: 'prima', spiergroepen: [], spiergroepenToResultaat: false});
  }

  toEnergy() {
    this.setState({introToEnergy: true});
  }

  toSpiergroepen() {
    this.setState({introToEnergy: false, energyToSpiergroepen: true});
  }

  toResultaat() {
    if(!this.state.spiergroepen[0]) {
      alert('Kies spiergroep(en) om te trainen en ga daarna verder.');
    }
    else {
      this.setState({energyToSpiergroepen: false, spiergroepenToResultaat: true});
    }
  }

  spiergroepenChecked(event) {
    const val = event.target.value;
    const arr = this.state.spiergroepen;
    if(!arr.includes(val)) {
      arr.push(val);
      this.setState({spiergroepen: arr})
    }
    else {
      const index = arr.indexOf(val);
      arr.splice(index, index + 1);
      this.setState({spiergroepen: arr});
    }
  }

  energy(event) {
    const level = Number(event.target.value);
    
    switch(true) {
    case level <= 50 && level >= 0:
      this.setState({energyLevel: veryTired});
      this.setState({energyPara: 'uitgeput'});
      break;
    case level <= 150 && level > 50:
      this.setState({energyLevel: tired});
      this.setState({energyPara: 'zwakjes'});
      break;
    case level <= 200 && level > 150:
      this.setState({energyLevel: neutral});
      this.setState({energyPara: 'prima'});
      break;
    case level <= 350 && level > 250:
      this.setState({energyLevel: goodEnergy});
      this.setState({energyPara: 'fit'});
      break;
    case level <= 400 && level > 350:
      this.setState({energyLevel: highEnergy});
      this.setState({energyPara: 'knallen!'});
      break;
    default:
      this.setState({energyLevel: neutral});
      this.setState({energyPara: 'prima'});
  }

  }
  
  render() {
    return (<div>
      {this.state.introToEnergy || this.state.energyToSpiergroepen || this.state.spiergroepenToResultaat ? null : <Intro toEnergy={this.toEnergy} />}
      {this.state.introToEnergy ? <Energy energyToSpiergroepen={this.toSpiergroepen} home={this.home} energySmiley={this.state.energyLevel} currentEnergy={this.state.energyPara} energyLevel={this.energy} /> : null}
      {this.state.energyToSpiergroepen ? <Spiergroepen spiergroepenToResultaat={this.toResultaat} spiergroepenChecked={this.spiergroepenChecked} home={this.home}/> : null}
      {this.state.spiergroepenToResultaat ? <Resultaat currentEnergy={this.state.energyPara} spiergroepen={this.state.spiergroepen} home={this.home} /> : null}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
    {/* <footer>
      <p>
        De oefeningen zijn bedoeld voor mensen zonder lichamelijke klachten. Twijfel je of je een oefening aankan? Vraag advies aan je fysiotherapeut of arts.
      </p>
    </footer> */}
  </React.StrictMode>,
  document.getElementById('root')
);