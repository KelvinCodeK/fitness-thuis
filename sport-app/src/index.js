import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Intro';
import Energy from './Energy';
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
     energyLevel: neutral,
     energyPara: 'prima'
    }
    this.energy = this.energy.bind(this);
    this.toEnergy = this.toEnergy.bind(this);
    this.home = this.home.bind(this);
  }

  home() {
    this.setState({introToEnergy: false});
  }

  toEnergy() {
    this.setState({introToEnergy: true});
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
      {this.state.introToEnergy ? null : <Intro toEnergy={this.toEnergy} />}
      {this.state.introToEnergy ? <Energy home={this.home} energySmiley={this.state.energyLevel} currentEnergy={this.state.energyPara} energyLevel={this.energy} /> : null}
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