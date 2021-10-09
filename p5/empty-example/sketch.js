// NOTE
// to run this script, right click on index.html and start the Live Server

function setup() {
  let c = createCanvas(24, 24);

  // turn off additional borders
  strokeWeight(0);
  
  for (let i = -1; i < 0; i++) {
  //   sky
    
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
    rect(18, 15 + i, 5, 3);
    rect(19, 14 + i, 3, 5);
    
  //   foreground
  //   (two different colors)
    
    fill('rgba(165, 214, 167, 1)');
    rect(0, 21, 24, 21);
    
    fill('rgba(129, 199, 132, 1)');
    rect(0, 22, 24, 24);

    saveCanvas(c, `myCanvas${i}`, 'jpg');

  }

}

function draw() {
  
// //   (x start, y start, x length, y length)
  
//   strokeWeight(0);
  
// //   sky
  
//   fill('rgba(197, 202, 233, .7)');
//   rect(0, 0, 24, 16);
  
// //   rayleigh
  
//   fill('rgba(255, 336, 179, 1)');
//   rect(0, 16, 24, 16);
     
//   fill('rgba(255, 193, 7, 1)');
//   rect(0, 17, 24, 19);
  
//   fill('rgba(245, 123, 0, 1)');
//   rect(0, 20, 24, 20);
  
// // sun
  
//   fill('rgba(240, 98, 145, 1)');
//   rect(18, 15, 5, 3);
//   rect(19, 14, 3, 5);
  
// // // second sun
// //   fill('rgba(255, 205, 210, 1)');
// //   rect(21, 11, 2, 2);
  
// //   foreground
  
//   fill('rgba(165, 214, 167, 1)');
//   rect(0, 21, 24, 21);
  
//   fill('rgba(129, 199, 132, 1)');
//   rect(0, 22, 24, 24);
  
// //   moon
  
//   fill('rgba(252, 228, 236, 1)');
//   rect(2, 2, 3, 3);
  
}