
let images = [];
let poem = "The Heights, a microcosm of the American Dream\nThe nucleus of Dominicanidad in New York\nWe find home in these tiendas\nWe seek solace in frio frios and pastelitos.\nThis land is our flesh and bone\nour home away from home on Broadway and it shows…\n- WASHINGTON HEIGHTS BY DILSON HERNANDEZ";


function preload() {
  // Load your images here in the desired order.
  //font = loadFont('FONTS/guida-mono-sharp-regular-pro.woff2');
  images[0] = loadImage('images/img20250210_02062555.jpg');
  images[1] = loadImage('images/img20250210_02293431.png');
  images[2] = loadImage('images/img20250210_02425114.png');
  images[3] = loadImage('images/img20250210_02574906.png');
  images[4] = loadImage('images/img20250210_03182411.jpg');
  images[5] = loadImage('images/img20250210_03233986.jpg');
  images[6] = loadImage('images/img20250210_03375013.jpg');
  images[7] = loadImage('images/img20250210_03461873.jpg');
  
  
  // Add more loadImage calls in the order you want them to appear
}

function setup() {
  createCanvas(windowWidth, windowHeight); 

  textFont('monospace');
  textSize(20);
  fill(30,255,100);
  image(images[0],windowWidth/2, windowHeight/2,400,551);
  image(images[1],15, 15,400,551);
  image(images[2],windowWidth-15, windowHeight-15,400,551);
  
}

function mouseClicked() {
  
  
  rotate(90)
  text(poem, mouseX, mouseY);


  
}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}