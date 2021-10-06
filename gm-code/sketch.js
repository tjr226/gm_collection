function setup() {
  let c = createCanvas(24, 24);
  

  strokeWeight(0);
  
  //   sky
    
    fill('rgba(197, 202, 233, 1)');
    rect(0, 0, 24, 16);
    
  //   rayleigh
    
    fill('rgba(255, 336, 179, 1)');
    rect(0, 16, 24, 16);
       
    fill('rgba(255, 193, 7, 1)');
    rect(0, 17, 24, 19);
    
    fill('rgba(245, 123, 0, 1)');
    rect(0, 20, 24, 20);
    
  // sun
    
    fill('rgba(240, 98, 145, 1)');
    rect(18, 15, 5, 3);
    rect(19, 14, 3, 5);
    
  // // second sun
  //   fill('rgba(255, 205, 210, 1)');
  //   rect(21, 11, 2, 2);
    
  //   foreground
    
    fill('rgba(165, 214, 167, 1)');
    rect(0, 21, 24, 21);
    
    fill('rgba(129, 199, 132, 1)');
    rect(0, 22, 24, 24);


    saveCanvas(c, 'myCanvas', 'jpg');


}

function draw() {
  
//   (x start, y start, x length, y length)
  
  strokeWeight(0);
  
//   sky
  
  fill('rgba(197, 202, 233, .7)');
  rect(0, 0, 24, 16);
  
//   rayleigh
  
  fill('rgba(255, 336, 179, 1)');
  rect(0, 16, 24, 16);
     
  fill('rgba(255, 193, 7, 1)');
  rect(0, 17, 24, 19);
  
  fill('rgba(245, 123, 0, 1)');
  rect(0, 20, 24, 20);
  
// sun
  
  fill('rgba(240, 98, 145, 1)');
  rect(18, 15, 5, 3);
  rect(19, 14, 3, 5);
  
// // second sun
//   fill('rgba(255, 205, 210, 1)');
//   rect(21, 11, 2, 2);
  
//   foreground
  
  fill('rgba(165, 214, 167, 1)');
  rect(0, 21, 24, 21);
  
  fill('rgba(129, 199, 132, 1)');
  rect(0, 22, 24, 24);
  
// //   moon
  
//   fill('rgba(252, 228, 236, 1)');
//   rect(2, 2, 3, 3);
  
}