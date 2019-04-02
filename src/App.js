import React, { Component } from 'react';
import Konva from 'konva';
import DesktopConstructor from './components/Desktop';
import CardConstructor from './components/Card';
import PreloadConstructor from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.htmlElement = null;
  }
  componentDidMount () {
    if(window && window.gameConfig && this.htmlElement){
      const stage = new Konva.Stage({
          container: this.htmlElement,
          width: window.innerWidth,
          height: window.innerHeight
      });



      window.addEventListener('resize',function(){
        stage.width(window.innerWidth);
        stage.height(window.innerHeight);
      });


      const Preload = PreloadConstructor(stage);

      


      Preload.load({
        'image2':'game/images/2.jpg'
      },function(images){
        const Desktop = DesktopConstructor(stage,window.gameConfig.desktop);

        const Card = CardConstructor(images.image2);

        Desktop.add(Card);
      });

      


      // add canvas element
    // var layer = new Konva.Layer();
    // stage.add(layer);
 
    // // create shape
    // var box = new Konva.Rect({
    //     x: 50,
    //     y: 50,
    //     width: 100,
    //     height: 50,
    //     fill: '#00D2FF',
    //     stroke: 'black',
    //     strokeWidth: 4,
    //     draggable: true
    // });
    // layer.add(box);
 
    // layer.draw();
 
    // // add cursor styling
    // box.on('mouseover', function() {
    //     document.body.style.cursor = 'pointer';
    // });
    // box.on('mouseout', function() {
    //     document.body.style.cursor = 'default';
    // });
    }
  }
  render() {
    return (     
      <div id="boardgamer" ref={el => {this.htmlElement = el;}}/>    
    );
  }
}

export default App;
