import Konva from 'konva';

const drawGrid = (grid, layer) => {
  let x = grid.x,
    y = grid.y,
    colMax = grid.width,
    rowMax = grid.height,
    col = grid.col,
    row = grid.row,
    colNum = 0,
    rowNum = 0,
    vertical = true;
  while (rowNum <= rowMax) {
    let x1, y1, x2, y2;
    if (vertical) {
      x1 = x2 = x + (colNum * col);
      y1 = y;
      y2 = y + (row * rowMax);
      colNum++;
      if (colNum > colMax) {
        vertical = false;
      }
    } else {
      y1 = y2 = y + (rowNum * row);
      x1 = x;
      x2 = x + (col * colMax);
      rowNum++
    }
    const redLine = new Konva.Line({
      points: [x1, y1, x2, y2],
      stroke: 'red',
      strokeWidth: 2
    });
    layer.add(redLine);
  }
  layer.draw();
};

const Desktop = (stage, ops) => {
  const cfg = Object.assign({
    grids: []
  }, ops);


  let layer = new Konva.Layer();
  stage.add(layer);

  let elements = [];

  let o = {};

  o.add = element => {
    elements.push(element);
    layer.add(element.node);
    layer.draw();
  }

  // drawGrid
  cfg.grids.forEach(grid => {
    if(grid.visible){
      drawGrid(grid, layer);
    }    
  });

  return o;
};

export default Desktop;