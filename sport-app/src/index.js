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
     spiergroepen: [],
     dumbells: null,
     schouders: 0,
     borst: 0,
     rug: 0,
     armen: 0,
     buikspieren: 0,
     benen: 0,
     loadStart: 0
    }
    this.energy = this.energy.bind(this);
    this.toEnergy = this.toEnergy.bind(this);
    this.home = this.home.bind(this);
    this.toSpiergroepen = this.toSpiergroepen.bind(this);
    this.spiergroepenChecked = this.spiergroepenChecked.bind(this);
    this.toResultaat = this.toResultaat.bind(this);
    this.next = this.next.bind(this);
    this.dumbells = this.dumbells.bind(this);
    this.loadEnd = this.loadEnd.bind(this);
  }

  home() {
    this.setState({
      introToEnergy: false,
      energyToSpiergroepen: false,
      spiergroepenToResultaat: false,
      energyLevel: neutral,
      energyPara: 'prima',
      spiergroepen: [],
      dumbells: null,
      schouders: 0,
      borst: 0,
      rug: 0,
      armen: 0,
      buikspieren: 0,
      benen: 0,
      loadStart: 0});
  }

  toEnergy() {
    this.setState({introToEnergy: true});
  }

  toSpiergroepen() {
    this.setState({introToEnergy: false, energyToSpiergroepen: true});
  }

  toResultaat() {

    if (this.state.dumbells && this.state.spiergroepen[0]) {
      this.setState({energyToSpiergroepen: false, spiergroepenToResultaat: true});
    }
    else if(!this.state.dumbells) {
      alert('Geef aan of jij over gewichten beschikt en ga daarna verder');
    }
    else {
      alert('Kies spiergroep(en) om te trainen en ga daarna verder.');
    }

  }

  spiergroepenChecked(event) {
    const isChecked = event.target.checked;
    const val = event.target.value;
    const arr = this.state.spiergroepen;
    if(isChecked) {
      if(!arr.includes(val)) {
        arr.push(val);
        this.setState({spiergroepen: arr})
      }
    }
    else {
      const index = arr.indexOf(val);
      arr.splice(index, 1);
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

  next(event) {
    const val = event.target.value;
    this.setState({loadStart: 1});
    if(this.state[val] === Number(event.target.getAttribute("data")) - 1) {
      this.setState({[val]: 0});
    }
    else {
      this.setState({[val]: this.state[val] + 1 });
    }
  }

  dumbells(event) {
    this.setState({dumbells: event.target.value});
  }

  loadEnd() {
    this.setState({loadStart: 0});
  }
  
  render() {
    return (<div>
      {this.state.introToEnergy || this.state.energyToSpiergroepen || this.state.spiergroepenToResultaat ? null : <Intro toEnergy={this.toEnergy} />}
      {this.state.introToEnergy ? <Energy energyToSpiergroepen={this.toSpiergroepen} home={this.home} energySmiley={this.state.energyLevel} currentEnergy={this.state.energyPara} energyLevel={this.energy} /> : null}
      {this.state.energyToSpiergroepen ? <Spiergroepen dumbells={this.dumbells} spiergroepenToResultaat={this.toResultaat} spiergroepenChecked={this.spiergroepenChecked} home={this.home}/> : null}
      {this.state.spiergroepenToResultaat ? <Resultaat  loading={this.state.loadStart} loadEnd={this.loadEnd} benen={this.state.benen} buikspieren={this.state.buikspieren} armen={this.state.armen} borst={this.state.borst} rug={this.state.rug} schouders={this.state.schouders} dumbells={this.state.dumbells} nextOefening={this.next} currentEnergy={this.state.energyPara} spiergroepen={this.state.spiergroepen} home={this.home} /> : null}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);