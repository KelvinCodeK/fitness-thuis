import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {
    
  componentDidMount() {
    localStorage.setItem('dumbells', this.props.dumbells);
    localStorage.setItem('currentEnergy', this.props.currentEnergy);
    localStorage.setItem('spiergroepen', this.props.spiergroepen);
  }

  oefeningNaam(item) {
    if( this.props.dumbells === "ja" ) {
      return this.obj.dumbells[item][this.props[item]][0];
    }
    else {
      return this.obj.noDumbells[item][this.props[item]][0];
    }
  }

  ol(item) {
    if( this.props.dumbells === "ja" ) {
      return this.obj.dumbells[item][this.props[item]][1];
    }
    else {
      return this.obj.noDumbells[item][this.props[item]][1];
    }
  }

  src(item){
    if( this.props.dumbells === "ja" ) {
      return this.obj.dumbells[item][this.props[item]][2];
    }
    else {
      return this.obj.noDumbells[item][this.props[item]][2];
    }
  }

  herhaling(item) {
    let sets = this.props.dumbells === "ja" 
     ? this.obj.dumbells[item][this.props[item]][3] 
      : this.obj.noDumbells[item][this.props[[item]]][3];
    let reps =  this.props.dumbells === "ja" 
    ? this.obj.dumbells[item][this.props[item]][4] 
     : this.obj.noDumbells[item][this.props[item]][4];
    switch(this.props.currentEnergy) {
      case 'uitgeput':
        sets -= 1;
        reps -= 2;
        break;
      case 'zwakjes':
        reps -= 3;
        break;
      case 'prima':
        break;
      case 'fit':
        reps += 2;
        break;
      case 'knallen!':
        sets += 1;
        break;
      default:
        break;
    }
    const herhalingArr = [sets, reps];
    return herhalingArr;
  }

  render() {
    this.obj = {
      dumbells: {
        schouders: [
          [
            'De shoulder press', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Neem plaats op een stoel en hef de gewichten boven je schouders</li>
              <li className="orderedListItem">Til de gewichten gecontroleerd omhoog totdat je armen gestrekt zijn</li>
              <li className="orderedListItem">Laat je armen terugzakken naar de startpositie van 90 graden</li>  
            </ol>, 
            'https://www.youtube.com/embed/Z5g48LuHB9s?rel=0&start=19&modestbranding=1&loop=1&iv_load_policy=3&playlist=Z5g48LuHB9s',
            3, 
            10],
          [
            'De pike pushup', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en til je lichaam omhoog in de vorm van een driehoek</li>
              <li className="orderedListItem">Til de hiel van je voeten en spreid je vingers</li>
              <li className="orderedListItem">Buig gecontroleerd je armen en laat je bovenlichaam naar beneden zakken, zet je daarna af van de grond naar de startpositie</li>
              <p>Als de vorm van een driehoek te intesief is plaats je je voeten verder naar achter</p>  
            </ol>, 
            'https://www.youtube.com/embed/x7_I5SUAd00?rel=0&start=4&modestbranding=1&loop=1&iv_load_policy=3&playlist=x7_I5SUAd00',
            3, 
            10],
          [
            'De lateral raise', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga rechtop staan en houdt de gewichten naast je lichaam met licht gebogen elleboog en voeten op schouderbreedte</li>
              <li className="orderedListItem">Til de gewichten tot nek hoogte horizontaal naast je lichaam</li>
              <li className="orderedListItem">Laat de gewichten gecontroleerd zakken tot de start positie</li>  
            </ol>, 
            'https://www.youtube.com/embed/geenhiHju-o?rel=0&start=20&modestbranding=1&loop=1&iv_load_policy=3&playlist=geenhiHju-o',
            3, 
            10]
        ],
        borst: [
          [
            'De push-up', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en hef je lichaam recht als een plank</li>
              <li className="orderedListItem">Buig gecontroleerd door je armen heen en zak tot iets boven het oppervlak terwijl je het lichaam recht houdt</li>
              <li className="orderedListItem">Zet je af van het oppervlak naar de startpositie</li>
              <p>Als dit te uitdagend is kan je de oefening ook uitvoeren met knie&euml;n op de vloer in plaats van voeten</p>    
            </ol>, 
            'https://www.youtube.com/embed/JyCG_5l3XLk?rel=0&start=22&modestbranding=1&loop=1&iv_load_policy=3&playlist=JyCG_5l3XLk',
            3, 
            10],
          [
            'De wide grip push-up', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en hef je lichaam recht als een plank</li>
              <li className="orderedListItem">Plaats je handen buiten schouderbreedte en zak tot iets boven het oppervlak terwijl je het lichaam recht houdt</li>
              <li className="orderedListItem">Zet je gecontroleerd af van het oppervlak naar de startpositie</li>  
              <p>Als dit te uitdagend is kan je de oefening ook uitvoeren met knie&euml;n op de vloer in plaats van voeten</p>  
            </ol>, 
            'https://www.youtube.com/embed/rr6eFNNDQdU?rel=0&start=35&modestbranding=1&loop=1&iv_load_policy=3&playlist=rr6eFNNDQdU',
            3, 
            10],
          [
            'De narrow grip push-up', 
            <ol className="oefeningOL">
            <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en hef je lichaam recht als een plank</li>
            <li className="orderedListItem">Plaats je handen binnen schouderbreedte en zak tot iets boven het oppervlak terwijl je het lichaam recht houdt</li>
            <li className="orderedListItem">Zet je gecontroleerd af van het oppervlak naar de startpositie</li>  
            <p>Als dit te uitdagend is kan je de oefening ook uitvoeren met knie&euml;n op de vloer in plaats van voeten</p>  
            </ol>, 
            'https://www.youtube.com/embed/IcWPQo1i0k4?rel=0&start=40&modestbranding=1&loop=1&iv_load_policy=3&playlist=IcWPQo1i0k4',
            3, 
            10]
        ],
        rug: [
          [
            'Lower back extensions', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga op je buik liggen op een comfortabel oppervlak</li>
              <li className="orderedListItem">Zet je tenen op de grond en plaats je handen op je achterhoofd</li>
              <li className="orderedListItem">Til gecontroleerd je bovenlichaam en voeten van de grond en weer terug naar de startpositie</li>  
              <p>In plaats van handen op het achterhoofd kan je ook je armen voor je uit strekken</p>  
            </ol>, 
            'https://www.youtube.com/embed/Ikq3OCFoP7c?rel=0&start=78&modestbranding=1&loop=1&iv_load_policy=3&playlist=Ikq3OCFoP7c',
            3, 
            10],
          [
            'De cobra stretch', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak met je buik op de vloer</li>
              <li className="orderedListItem">Til je bovenlichaam van de grond totdat je armen gestrekt zijn</li>
              <li className="orderedListItem">Laat gecontroleerd je lichaam zakken naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/Aa6zdmje-c4?rel=0&start=24&modestbranding=1&loop=1&iv_load_policy=3&playlist=Aa6zdmje-c4',
            3, 
            10],
          [
            'De dumbell row', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je knie en je hand op een verhoogd oppervlak zoals je bed</li>
              <li className="orderedListItem">Pak het gewicht met &eacute;&eacute;n arm op en hef je elleboog boven je rug</li>
              <li className="orderedListItem">Laat het gewicht gecontroleerd zakken naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/-koP10y1qZI?rel=0&start=38&modestbranding=1&loop=1&iv_load_policy=3&playlist=-koP10y1qZI',
            3, 
            10]
        ],
        armen: [
          [
            'De tricep dip', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je handen op schouderbreedte op een stevige stoel en zet een stap naar voren met beide voeten</li>
              <li className="orderedListItem">Laat je lichaam gecontroleerd zakken totdat de ellebogen 90 graden zijn gebogen</li>
              <li className="orderedListItem">Hef je lichaam naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/6kALZikXxLc?rel=0&start=26&modestbranding=1&loop=1&iv_load_policy=3&playlist=6kALZikXxLc',
            3, 
            10],
          [
            'De bicep curl', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga rechtop staan en houdt de gewichten naast je lichaam</li>
              <li className="orderedListItem">Til de gewichten op terwijl je ze naar buiten roteerd totdat het gewicht net boven de elleboog komt</li>
              <li className="orderedListItem">Laat het gewicht gecontroleerd zakken tot de startpositie en roteer het gewicht terug</li>  
            </ol>, 
            'https://www.youtube.com/embed/ykJmrZ5v0Oo?rel=0&start=21&modestbranding=1&loop=1&iv_load_policy=3&playlist=ykJmrZ5v0Oo',
            3, 
            10],
          [
            'De hammer curl', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga rechtop staan en houdt de gewichten naast je lichaam</li>
              <li className="orderedListItem">Houdt je ellebogen dichtbij je torso en til het gewicht op tot net boven de elleboog</li>
              <li className="orderedListItem">Laat het gewicht gecontroleerd zakken tot de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/P5sXHLmXmBM?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=P5sXHLmXmBM',
            3, 
            10]
          ],
        buikspieren: [
          [
            'De leg raise', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga op je rug liggen en plaats je handen onder je onderrug</li>
              <li className="orderedListItem">Til je benen van de grond en hou je knie&euml;n iets gebogen</li>
              <li className="orderedListItem">Til je benen totdat ze zijn gestrekt boven je heupen en laat ze gecontroleerd zakken naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/l4kQd9eWclE?rel=0&start=7&modestbranding=1&loop=1&iv_load_policy=3&playlist=l4kQd9eWclE',
            3, 
            10],
          [
            'De jackknife', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga op je rug liggen op een comfortabel oppervlak</li>
              <li className="orderedListItem">Hef je benen met gebogen knie&euml;n van de grond en strek je armen uit naar achteren</li>
              <li className="orderedListItem">Strek je benen en breng daarna je knie&euml;n en armen naar elkaar toe</li>  
              <li className="orderedListItem">Beweeg gecontroleerd terug naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/CWOZyf8kaH0?rel=0&start=22&modestbranding=1&loop=1&iv_load_policy=3&playlist=CWOZyf8kaH0',
            3, 
            10],
          [
            'De crunch', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga op je rug liggen en plaats je voeten voor je op de grond met gebogen knie&euml;n</li>
              <li className="orderedListItem">Plaats je handen op je achterhoofd en hef je bovenlichaam zonder dat je onderrug van de vloer komt</li>
              <li className="orderedListItem">Laat je lichaam gecontroleerd zakken naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&start=20&modestbranding=1&loop=1&iv_load_policy=3&playlist=MKmrqcoCZ-M',
            3, 
            10]
        ],
        benen: [
          [
            'De squat', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga rechtop staan met je voeten op schouderbreedte</li>
              <li className="orderedListItem">Zak gecontroleerd naar beneden alsof je in een stoel plaats neemt</li>
              <li className="orderedListItem">Houdt je lichaam recht en strek je benen om terug te komen in de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/UXJrBgI2RxA?rel=0&start=37&modestbranding=1&loop=1&iv_load_policy=3&playlist=UXJrBgI2RxA',
            3, 
            10],
          [
            'De lunge', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga rechtop staan met je voeten op schouderbreedte</li>
              <li className="orderedListItem">Neem een grote stap naar voren en laat je lichaam zakken totdat je voorste knie op de hoogte van je tenen is</li>
              <li className="orderedListItem">Stap weer naar achter om in de startpositie te eindigen</li>  
            </ol>, 
            'https://www.youtube.com/embed/COKYKgQ8KR0?rel=0&start=22&modestbranding=1&loop=1&iv_load_policy=3&playlist=COKYKgQ8KR0',
            3, 
            10],
          [
            'De calf raise', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga rechtop staan en houdt de gewichten naast je lichaam</li>
              <li className="orderedListItem">Zet je voeten af van de grond totdat je op je voorvoet staat</li>
              <li className="orderedListItem">Laat je voeten terugzakken naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/_iYwv4QVFjM?rel=0&start=5&modestbranding=1&loop=1&iv_load_policy=3&playlist=_iYwv4QVFjM',
            3, 
            10]
        ]
    },
      noDumbells: {
        schouders: [
          [
            'De pike pushup', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en til je lichaam omhoog in de vorm van een driehoek</li>
              <li className="orderedListItem">Til de hiel van je voeten en spreid je vingers</li>
              <li className="orderedListItem">Buig gecontroleerd je armen en laat je bovenlichaam naar beneden zakken, zet je daarna af van de grond naar de startpositie</li>
              <p>Als de vorm van een driehoek te intesief is plaats je je voeten verder naar achter</p>  
            </ol>, 
            'https://www.youtube.com/embed/x7_I5SUAd00?rel=0&start=4&modestbranding=1&loop=1&iv_load_policy=3&playlist=x7_I5SUAd00',
            3, 
            10],
          [
            'De side plank raise', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Ga gestrekt op je zij liggen op een stevig en comfortabel oppervlak</li>
              <li className="orderedListItem">Gebruik je schouder en je core om je lichaam op te heffen</li>
              <li className="orderedListItem">Zak gecontroleerd terug naar de startpositie</li>  
            </ol>, 
            'https://www.youtube.com/embed/bADuvN8O-Ng?rel=0&start=9&modestbranding=1&loop=1&iv_load_policy=3&playlist=bADuvN8O-Ng',
            3, 
            10]
        ],
        borst: [
          [
            'De push-up', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en hef je lichaam recht als een plank</li>
              <li className="orderedListItem">Buig gecontroleerd door je armen heen en zak tot iets boven het oppervlak terwijl je het lichaam recht houdt</li>
              <li className="orderedListItem">Zet je af van het oppervlak naar de startpositie</li>
              <p>Als dit te uitdagend is kan je de oefening ook uitvoeren met knie&euml;n op de vloer in plaats van voeten</p>    
            </ol>, 
            'https://www.youtube.com/embed/JyCG_5l3XLk?rel=0&start=22&modestbranding=1&loop=1&iv_load_policy=3&playlist=JyCG_5l3XLk',
            3, 
            10],
          [
            'De wide grip push-up', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en hef je lichaam recht als een plank</li>
              <li className="orderedListItem">Plaats je handen buiten schouderbreedte en zak tot iets boven het oppervlak terwijl je het lichaam recht houdt</li>
              <li className="orderedListItem">Zet je gecontroleerd af van het oppervlak naar de startpositie</li>  
              <p>Als dit te uitdagend is kan je de oefening ook uitvoeren met knie&euml;n op de vloer in plaats van voeten</p>  
            </ol>, 
            'https://www.youtube.com/embed/rr6eFNNDQdU?rel=0&start=35&modestbranding=1&loop=1&iv_load_policy=3&playlist=rr6eFNNDQdU',
            3, 
            10],
          [
            'De narrow grip push-up', 
            <ol className="oefeningOL">
            <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak en hef je lichaam recht als een plank</li>
            <li className="orderedListItem">Plaats je handen binnen schouderbreedte en zak tot iets boven het oppervlak terwijl je het lichaam recht houdt</li>
            <li className="orderedListItem">Zet je gecontroleerd af van het oppervlak naar de startpositie</li>  
            <p>Als dit te uitdagend is kan je de oefening ook uitvoeren met knie&euml;n op de vloer in plaats van voeten</p>  
            </ol>, 
            'https://www.youtube.com/embed/IcWPQo1i0k4?rel=0&start=40&modestbranding=1&loop=1&iv_load_policy=3&playlist=IcWPQo1i0k4',
            3, 
            10]
      ],
      rug: [
        [
          'Lower back extensions', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga op je buik liggen op een comfortabel oppervlak</li>
            <li className="orderedListItem">Zet je tenen op de grond en plaats je handen op je achterhoofd</li>
            <li className="orderedListItem">Til gecontroleerd je bovenlichaam en voeten van de grond en weer terug naar de startpositie</li>  
            <p>In plaats van handen op het achterhoofd kan je ook je armen voor je uit strekken</p>  
          </ol>, 
          'https://www.youtube.com/embed/Ikq3OCFoP7c?rel=0&start=78&modestbranding=1&loop=1&iv_load_policy=3&playlist=Ikq3OCFoP7c',
          3, 
          10],
        [
          'De cobra stretch', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Plaats je voeten en handen op een stevig oppervlak met je buik op de vloer</li>
            <li className="orderedListItem">Til gecontroleerd je bovenlichaam van de grond totdat je armen gestrekt zijn</li>
            <li className="orderedListItem">Laat je lichaam zakken naar de startpositie</li>  
          </ol>, 
          'https://www.youtube.com/embed/Aa6zdmje-c4?rel=0&start=24&modestbranding=1&loop=1&iv_load_policy=3&playlist=Aa6zdmje-c4',
          3, 
          10]
      ],
      armen: [
        [
          'De tricep dip', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Plaats je handen op schouderbreedte op een stevige stoel en zet een stap naar voeren met beide voeten</li>
            <li className="orderedListItem">Laat je lichaam gecontroleerd zakken totdat de ellebogen 90 graden zijn gebogen</li>
            <li className="orderedListItem">Hef je lichaam naar de startpositie</li>  
          </ol>, 
          'https://www.youtube.com/embed/6kALZikXxLc?rel=0&start=26&modestbranding=1&loop=1&iv_load_policy=3&playlist=6kALZikXxLc',
          3, 
          10],
        [
          'De towel curl', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga rechtop staan en zak iets door je knie&euml;n</li>
            <li className="orderedListItem">Plaats een handoek achter je knie holte en houdt de handoek met twee handen boven je been vast</li>
            <li className="orderedListItem">Til de handdoek omhoog totdat de handdoek boven je elleboog uitkomt en laat hem gecontroleerd zakken</li>  
            <p>Voor evenwicht kan je tegen een muur aan staan en duw met je been de handdoek omlaag om de oefening uitdagender te maken</p>
          </ol>, 
          'https://www.youtube.com/embed/kx_CogPXDJ0?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=kx_CogPXDJ0',
          3, 
          10]
      ],
      buikspieren: [
        [
          'De leg raise', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga op je rug liggen en plaats je handen onder je onderrug</li>
            <li className="orderedListItem">Til je benen van de grond en hou je knie&euml;n iets gebogen</li>
            <li className="orderedListItem">Til je benen totdat ze zijn gestrekt boven je heupen en laat ze gecontroleerd zakken naar de startpositie</li>  
          </ol>, 
          'https://www.youtube.com/embed/l4kQd9eWclE?rel=0&start=7&modestbranding=1&loop=1&iv_load_policy=3&playlist=l4kQd9eWclE',
          3, 
          10],
        [
          'De jackknife', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga op je rug liggen op een comfortabel oppervlak</li>
            <li className="orderedListItem">Hef je benen met gebogen knie&euml;n van de grond en strek je armen uit naar achteren</li>
            <li className="orderedListItem">Strek je benen en breng daarna je knie&euml;n en armen naar elkaar toe</li>  
            <li className="orderedListItem">Beweeg gecontroleerd terug naar de startpositie</li>  
          </ol>, 
          'https://www.youtube.com/embed/CWOZyf8kaH0?rel=0&start=22&modestbranding=1&loop=1&iv_load_policy=3&playlist=CWOZyf8kaH0',
          3, 
          10],
        [
          'De crunch', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga op je rug liggen en plaats je voeten voor je op de grond met gebogen knie&euml;n</li>
            <li className="orderedListItem">Plaats je handen op je achterhoofd en hef je bovenlichaam zonder dat je onderrug van de vloer komt</li>
            <li className="orderedListItem">Laat je lichaam gecontroleerd zakken naar de startpositie</li>  
          </ol>, 
          'https://www.youtube.com/embed/MKmrqcoCZ-M?rel=0&start=20&modestbranding=1&loop=1&iv_load_policy=3&playlist=MKmrqcoCZ-M',
          3, 
          10]
      ],
      benen: [
        [
          'De squat', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga rechtop staan met je voeten op schouderbreedte</li>
            <li className="orderedListItem">Zak gecontroleerd naar beneden alsof je in een stoel plaats neemt</li>
            <li className="orderedListItem">Houdt je lichaam recht en strek je benen om terug te komen in de startpositie</li>  
          </ol>, 
          'https://www.youtube.com/embed/UXJrBgI2RxA?rel=0&start=37&modestbranding=1&loop=1&iv_load_policy=3&playlist=UXJrBgI2RxA',
          3, 
          10],
        [
          'De lunge', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Ga rechtop staan met je voeten op schouderbreedte</li>
            <li className="orderedListItem">Neem een grote stap naar voren en laat je lichaam zakken totdat je voorste knie op de hoogte van je tenen is</li>
            <li className="orderedListItem">Stap weer naar achter om in de startpositie te eindigen</li>  
          </ol>, 
          'https://www.youtube.com/embed/COKYKgQ8KR0?rel=0&start=22&modestbranding=1&loop=1&iv_load_policy=3&playlist=COKYKgQ8KR0',
          3, 
          10]
      ] 
    } 
  }

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
           ? <p className="oefeningenIntro">Jij gaat vandaag <span>{this.props.currentEnergy}</span> De onderstaande oefeningen zijn aangepast aan je energieniveau.</p>
            : <p className="oefeningenIntro">Jij voelt je vandaag <span>{this.props.currentEnergy}</span>. De onderstaande oefeningen zijn aangepast aan je energieniveau.</p>}
          <ul>
          {this.props.spiergroepen.map((x) => {
              return <a key={`${x + 1}`} href={'#' + x}><li className="ulListItem" key={`${x + 2}`}>{x}</li></a>
          })}
        </ul>
          {this.props.spiergroepen.map((x) => {
              return (
              <section key={`${x + 3}`} id={x} className="oefening">
                <h2 key={`${x + 4}`}>{x}</h2>
                <h3 key={`${x + 5}`} className="oefeningUitleg"><span key={`${x + 6}`} >{this.oefeningNaam(x)}</span></h3>
                <div key={`${x + 7}`} className="iframeWidth"> <span className="loadingInitial">laden...</span>{this.props.loading === 1 ? <span style={{textShadow: '2px 2px black', position: 'absolute', zIndex: '1', padding: '5px', borderRadius: '5px', border: '1px solid white', backgroundColor: '#505056'}}>laden...</span> : null}
                <div key={`${x + 8}`} className="iframeContainer"> 
                <iframe onLoad={this.props.loadEnd} key={`${x + 9}`} src={this.src(x)} title="YouTube fitnessoefening voor thuis" frameBorder="0"></iframe>
                </div>
                </div>
                {this.ol(x)}
                {
                <div key={`${x + 10}`} className="herhalingen">
                  <p key={`${x + 11}`} >Sets: <span>{this.herhaling(x)[0]}</span></p>
                  <p key={`${x + 12}`} >Reps per set: <span>{this.herhaling(x)[1]}</span></p>
                </div>}
                <p className="andereOefening">
                  Bekijk een andere {x} oefening
                </p>
                <button data={this.props.dumbells === "ja" ? this.obj.dumbells[x].length : this.obj.noDumbells[x].length} value={x} onClick={this.props.nextOefening} className="introButtonEen">next</button>
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