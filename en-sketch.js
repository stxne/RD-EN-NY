let images = [];

function preload() {
  // Load your images here in the desired order.
  images[0] = loadImage('images/img20250210_02062555.jpg');
  images[1] = loadImage('images/img20250210_02293431.jpg');
  images[2] = loadImage('images/img20250210_02425114.jpg');
  images[3] = loadImage('images/img20250210_02574906.jpg');
  images[4] = loadImage('images/img20250210_03182411.jpg');
  images[5] = loadImage('images/img20250210_03233986.jpg');
  images[6] = loadImage('images/img20250210_03375013.jpg');
  images[7] = loadImage('images/img20250210_03461873.jpg');
  
  
  // Add more loadImage calls in the order you want them to appear
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  for (let i = 0; i < images.length; i ++) {
    image(images[i], random(100,windowWidth),random(100,windowHeight), 200,275);
  }
}

function draw() {

  
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}