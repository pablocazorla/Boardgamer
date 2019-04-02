import Konva from 'konva';

const w = 180;
const sc = w/625;




const Card = (imageFront) => {
  var group = new Konva.Group({
      x: 120,
      y: 40,
      draggable:true
  });

  var front = new Konva.Rect({
    x: 0,
    y: 0,
    width: w,
    height: w,
    fillPatternImage: imageFront,
    fillPatternOffset: { x : 222, y : 74},
    fillPatternScale:{x:sc,y:sc},
    stroke: 'black',
    strokeWidth: 4,
    //visible:false
  });

  var back = new Konva.Rect({
    x: 0,
    y: 0,
    width: w,
    height: w,
    fillPatternImage: imageFront,
    fillPatternOffset: { x : 222, y : 1950},
    fillPatternScale:{x:sc,y:sc},
    stroke: 'black',
    strokeWidth: 4,
    visible:false
  });

  var margin = 4;

  var light = new Konva.Rect({
    x: -margin,
    y: -margin,
    width: w+(2*margin),
    height: w+(2*margin),
    stroke: '#0F0',
    strokeWidth: 3,
    lineCap: 'round',
    lineJoin: 'round',
    visible:false
  });

  
  group.add(back);
  group.add(front);
  group.add(light);

  let o = {
    id: '00001',
    node:group,
    imageFront
  };


  return o;
}

export default Card;