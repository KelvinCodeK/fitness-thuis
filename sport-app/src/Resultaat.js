import React from 'react';
import './Resultaat.css';


class Resultaat extends React.Component {
    


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

 test() {
    console.log('hoi');
  }

  render() {
    this.obj = {
      dumbells: {
        schouders: [
          [
            'De shoulder press', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
            </ol>, 
            'https://www.youtube.com/embed/Z5g48LuHB9s?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=Z5g48LuHB9s',
            3, 
            10],
            [
              'De pike pushup', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
              </ol>, 
              'https://www.youtube.com/embed/x7_I5SUAd00?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=x7_I5SUAd00',
              3, 
              10],
              [
                'De lateral raise', 
                <ol className="oefeningOL">
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                </ol>, 
                'https://www.youtube.com/embed/geenhiHju-o?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=geenhiHju-o',
                3, 
                10]
        ],
        borst: [
          [
            'De push-up', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
            </ol>, 
            'https://www.youtube.com/embed/JyCG_5l3XLk?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=JyCG_5l3XLk',
            3, 
            10],
           [
              'De wide grip push-up', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
              </ol>, 
              'https://www.youtube.com/embed/rr6eFNNDQdU?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=rr6eFNNDQdU',
              3, 
              10],
              [
                'De narrow grip push-up', 
                <ol className="oefeningOL">
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                </ol>, 
                'https://www.youtube.com/embed/IcWPQo1i0k4?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=IcWPQo1i0k4',
                3, 
                10]
        ],
        rug: [
          [
            'Lower back extensions', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
            </ol>, 
            'https://www.youtube.com/embed/Ikq3OCFoP7c?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=Ikq3OCFoP7c',
            3, 
            10],
            [
              'De cobra stretch', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
              </ol>, 
              'https://www.youtube.com/embed/Aa6zdmje-c4?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=Aa6zdmje-c4',
              3, 
              10],
              [
                'De dumbell row', 
                <ol className="oefeningOL">
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                </ol>, 
                'https://www.youtube.com/embed/-koP10y1qZI?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=-koP10y1qZI',
                3, 
                10]

              ],
              armen: [

                [
                  'De tricep dip', 
                  <ol className="oefeningOL">
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
                  </ol>, 
                  'https://www.youtube.com/embed/6kALZikXxLc?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=6kALZikXxLc',
                  3, 
                  10],
                  [
                    'De bicep curl', 
                    <ol className="oefeningOL">
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
                    </ol>, 
                    'https://www.youtube.com/embed/rXfGNkxUZks?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=rXfGNkxUZks',
                    3, 
                    10],
                    [
                      'De hammer curl', 
                      <ol className="oefeningOL">
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                      </ol>, 
                      'https://www.youtube.com/embed/P5sXHLmXmBM?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=P5sXHLmXmBM',
                      3, 
                      10]
              ],

              buikspieren: [
                [
                  'De leg raise', 
                  <ol className="oefeningOL">
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
                  </ol>, 
                  'https://www.youtube.com/embed/l4kQd9eWclE?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=l4kQd9eWclE',
                  3, 
                  10],
                  [
                    'De jackknife', 
                    <ol className="oefeningOL">
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
                    </ol>, 
                    'https://www.youtube.com/embed/CWOZyf8kaH0?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=CWOZyf8kaH0',
                    3, 
                    10],
                    [
                      'De crunch', 
                      <ol className="oefeningOL">
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                      </ol>, 
                      'https://www.youtube.com/embed/geenhiHju-o?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=geenhiHju-o',
                      3, 
                      10]
              ],

              benen: [

                [
                  'De squat', 
                  <ol className="oefeningOL">
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
                    <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
                  </ol>, 
                  'https://www.youtube.com/embed/UXJrBgI2RxA?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=UXJrBgI2RxA',
                  3, 
                  10],
                  [
                    'De lunge', 
                    <ol className="oefeningOL">
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                      <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
                    </ol>, 
                    'https://www.youtube.com/embed/COKYKgQ8KR0?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=COKYKgQ8KR0',
                    3, 
                    10],
                    [
                      'De wall sit', 
                      <ol className="oefeningOL">
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                        <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                      </ol>, 
                      'https://www.youtube.com/embed/vDf2Bfb6SOg?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=vDf2Bfb6SOg',
                      3, 
                      10]
              ]

      },
      noDumbells: {
        schouders: [

         [
            'De lateral raise', 
                <ol className="oefeningOL">
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                </ol>, 
                'https://www.youtube.com/embed/geenhiHju-o?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=geenhiHju-o',
                3, 
                10],
           [
              'De pike pushup', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
              </ol>, 
              'https://www.youtube.com/embed/x7_I5SUAd00?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=x7_I5SUAd00',
              3, 
              10]
        ]
        ,

        borst: [
         [
            'De push-up', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
            </ol>, 
            'https://www.youtube.com/embed/JyCG_5l3XLk?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=JyCG_5l3XLk',
            3, 
            10],
            [
              'De wide grip push-up', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
              </ol>, 
              'https://www.youtube.com/embed/rr6eFNNDQdU?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=rr6eFNNDQdU',
              3, 
              10],
            [
                'De narrow grip push-up', 
                <ol className="oefeningOL">
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                  <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
                </ol>, 
                'https://www.youtube.com/embed/IcWPQo1i0k4?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=IcWPQo1i0k4',
                3, 
                10]

        ]
        ,

        rug: [
          [
            'Lower back extensions', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
            </ol>, 
            'https://www.youtube.com/embed/Ikq3OCFoP7c?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=Ikq3OCFoP7c',
            3, 
            10],
            [
              'De cobra stretch', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
              </ol>, 
              'https://www.youtube.com/embed/Aa6zdmje-c4?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=Aa6zdmje-c4',
              3, 
              10]

        ]
       ,

       armen: [
        [
          'De tricep dip', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
          </ol>, 
          'https://www.youtube.com/embed/6kALZikXxLc?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=6kALZikXxLc',
          3, 
          10],
        [
            'De towel curl', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
            </ol>, 
            'https://www.youtube.com/embed/kx_CogPXDJ0?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=kx_CogPXDJ0',
            3, 
            10]
       ]
       ,

       buikspieren: [
       [
          'De leg raise', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
          </ol>, 
          'https://www.youtube.com/embed/l4kQd9eWclE?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=l4kQd9eWclE',
          3, 
          10],
          [
            'De jackknife', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
            </ol>, 
            'https://www.youtube.com/embed/CWOZyf8kaH0?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=CWOZyf8kaH0',
            3, 
            10],
           [
              'De crunch', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
              </ol>, 
              'https://www.youtube.com/embed/geenhiHju-o?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=geenhiHju-o',
              3, 
              10]

       ]
       ,

       benen: [
       [
          'De squat', 
          <ol className="oefeningOL">
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>
            <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn</li>  
          </ol>, 
          'https://www.youtube.com/embed/UXJrBgI2RxA?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=UXJrBgI2RxA',
          3, 
          10],
        [
            'De lunge', 
            <ol className="oefeningOL">
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>
              <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_1</li>  
            </ol>, 
            'https://www.youtube.com/embed/COKYKgQ8KR0?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=COKYKgQ8KR0',
            3, 
            10],
         [
              'De wall sit', 
              <ol className="oefeningOL">
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>
                <li className="orderedListItem">Oefeningen een en twee zijn Oefeningen een en twee zijn Oefeningen een en twee zijn_2</li>  
              </ol>, 
              'https://www.youtube.com/embed/vDf2Bfb6SOg?rel=0&modestbranding=1&loop=1&iv_load_policy=3&playlist=vDf2Bfb6SOg',
              3, 
              10]

      
       ]
        
      },
      
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
                </div>
                }
                <p className="andereOefening">Bekijk een andere oefening</p>
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