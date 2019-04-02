import Konva from 'konva';


const w = 30;
//   h = 26,



const Preloader = (stage) => {
  let layer = new Konva.Layer();



  var rect = new Konva.Rect({
    x: stage.getWidth()/2,
    y: stage.getHeight()/2,
    width: w,
    height: w,
    stroke: '#FFF',
    strokeWidth:5,
    rotation:45,
    offset: {
        x: w/2,
        y: w/2
    }
  });

  var text = new Konva.Text({
    x: stage.getWidth() / 2,
    y: w + 5 + stage.getHeight()/2,
    text: 'Loading',
    fontSize: 20,
    fontFamily: 'Lato',
    fill: '#FFF',
    align: 'center'
  });

  text.setOffset({
    x: text.getWidth() / 2
  });

  layer.add(rect);
  layer.add(text);

  stage.add(layer);

  // one revolution per 4 seconds
  var angularSpeed = 90;
  var anim = new Konva.Animation(function(frame) {
      var angleDiff = frame.timeDiff * angularSpeed / 1000;
      rect.rotate(angleDiff);
  }, layer);
  anim.start();

  let o = {};

  let images = {};
    

  

  o.load = (imageCollection, callback) => {
    let numImgs = 0,
    numImgsLoaded = 0;
    for(var a in imageCollection){
      numImgs++;
      var imgObj = new Image();

      imgObj.src = imageCollection[a];

      images[a] = imgObj;

      // eslint-disable-next-line
      imgObj.onload = function(){
        numImgsLoaded++;
        if(numImgsLoaded === numImgs){
          layer.destroy();
          callback.apply(null,[images]);
        }
      }
    }
  };


  return o;
}

export default Preloader;