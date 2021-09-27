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
     energyLevel: neutral,
     energyPara: 'prima'
    }
    this.energy = this.energy.bind(this);
  }

  energy(event) {
    const level = Number(event.target.value);
    
    switch(true) {
    case level <= 50 && level >= 0:
      this.setState({energyLevel: veryTired});
      this.setState({energyPara: 'uitgeput'});
      break;
    case level <= 100 && level > 50:
      this.setState({energyLevel: tired});
      this.setState({energyPara: 'zwakjes'});
      break;
    case level <= 200 && level > 100:
      this.setState({energyLevel: neutral});
      this.setState({energyPara: 'prima'});
      break;
    case level <= 350 && level > 200:
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
    return (
      <Energy energySmiley={this.state.energyLevel} currentEnergy={this.state.energyPara} energyLevel={this.energy} />
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