let images = [];
let poem = "The Heights, a microcosm of the American Dream\nThe nucleus of Dominicanidad in New York\nWe find home in these tiendas\nWe seek solace in frio frios and pastelitos.\nThis land is our flesh and bone\nour home away from home on Broadway and it shows…\n- WASHINGTON HEIGHTS BY DILSON HERNANDEZ";
let bbox;

function preload() {
  // Load your images here in the desired order.
  font = loadFont('FONTS/guida-mono-sharp-regular-pro.woff2');
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

  textFont(font);
  textSize(15);
  textAlign(CENTER, CENTER);
  
  fill(0);
  bbox = font.textBounds(poem, mouseX, MouseY);
  rect(bbox.x, bbox.y, bbox.w, bbox.h);
  
  fill(255);
  text(poem, mouseX, mouseY);

  for (let i = 0; i < images.length; i ++) {
     image(images[i], random(10,x-10),random(10,y-10), 200,275);
     
  }
}

function draw() {
  
  

  
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}