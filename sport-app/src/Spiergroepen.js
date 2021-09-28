import React from 'react';
import './Spiergroepen.css';


class Spiergroepen extends React.Component {

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
        <p className="spiergroepenPara">
          Welke <span>spiergroep(en)</span> wil je trainen?
        </p>
        <div className="checkboxContainer">
            <div className="checkboxDiv">
                <input onChange={this.props.spiergroepenChecked} type="checkbox" id="schouders" value="schouders" />
                <label htmlFor="schouders">Schouders</label> 
            </div> 
            <div className="checkboxDiv">
                <input onChange={this.props.spiergroepenChecked} type="checkbox" id="borst" value="borst" />
                <label htmlFor="borst">Borst</label>
            </div>
            <div className="checkboxDiv">
                <input onChange={this.props.spiergroepenChecked} type="checkbox" id="rug" value="rug" />
                <label htmlFor="rug">Rug</label>
            </div>
            <div className="checkboxDiv">
                <input onChange={this.props.spiergroepenChecked} type="checkbox" id="armen" value="armen" />
                <label htmlFor="armen">Armen</label>
            </div>
            <div className="checkboxDiv"> 
                <input onChange={this.props.spiergroepenChecked} type="checkbox" id="buikspieren" value="buikspieren" />
                <label htmlFor="buikspieren">Buikspieren</label>
            </div>
            <div className="checkboxDiv"> 
                <input onChange={this.props.spiergroepenChecked} type="checkbox" id="benen" value="benen" />
                <label htmlFor="benen">Benen</label></div>
        </div>
        <button onClick={this.props.spiergroepenToResultaat}className="introButtonEen">finish</button>
      </section>
    </div>
  );}
}

export default Spiergroepen;