import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './Intro';
import Energy from './Energy';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      energyLeft: 0.5,
      energyRight: 0.5
    };
    this.energy = this.energy.bind(this);
  }

  energy(event) {
    if(event.target.value < 0.5) {
      this.setState(state => ({energyLeft: state.energyLeft + 0.1}));
    }
    else {
      this.setState({energyRight: event.target.value});
    }
  }
  
  render() {
    return (
      <Energy energyLevelLeft={this.state.energyLeft} energyLevelLeft={this.state.energyLeft} energyFunc={this.energy}/>
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