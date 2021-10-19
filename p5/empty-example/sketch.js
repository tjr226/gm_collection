// NOTE
// to run this script, right click on index.html and start the Live Server

function setup() {
  let c = createCanvas(24, 24);

  // turn off additional borders
  strokeWeight(0);
  
  var xOffsetArray = [0, 1, 2, 17];
  var xOffsetArrayLength = xOffsetArray.length;

  for (let i = 0; i < 8; i++) {
  //   sky

    if (i == 3 || i == 4 || i == 5) {
      continue
      print(i)
    }

    for (let j = 0; j < xOffsetArrayLength; j++){
    
    fill('rgba(197, 202, 233, 1)');
    rect(0, 0, 24, 16);
    
  //   rayleigh
  //   (three different colors)
    
    fill('rgba(255, 336, 179, 1)');
    rect(0, 16, 24, 16);
       
    fill('rgba(255, 193, 7, 1)');
    rect(0, 17, 24, 19);
    
    fill('rgba(245, 123, 0, 1)');
    rect(0, 20, 24, 20);
    
  // sun
  // (sun is made up of two overlaid rectangles - one 3x5, one 5x3)
    
    fill('rgba(240, 98, 145, 1)');
    // rect(x start, y start, x length, y length)
    // vert rect
    rect(2 + xOffsetArray[j], 20 - i, 3, 5);
    // horizontal rect
    rect(1 + xOffsetArray[j], 21 - i, 5, 3);
    
  //   foreground
  //   (two different colors)
    
    fill('rgba(165, 214, 167, 1)');
    rect(0, 21, 24, 21);
    
    fill('rgba(129, 199, 132, 1)');
    rect(0, 22, 24, 24);

    // save(c, `myCanvas`, 'jpg');
    // save(`myCanvas`, 'jpg');

    }
  }

  
}

function draw() {

}
