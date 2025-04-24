let images = [];
let imageIndex = 0;

function preload() {
  // Load your images here in the desired order.
  images[0] = loadImage('images/img20250420_02530938_01.jpg');
  images[1] = loadImage('images/img20250420_02530938_02.jpg');
  images[2] = loadImage('images/img20250420_02530938_03.jpg');
  images[3] = loadImage('images/img20250420_02530938_04.jpg');
  images[4] = loadImage('images/img20250420_02530938_05.jpg');
  images[5] = loadImage('images/img20250420_02530938_06.jpg');
  images[6] = loadImage('images/img20250420_02530938_07.jpg');
  images[7] = loadImage('images/img20250420_02530938_08.jpg');
  images[8] = loadImage('images/img20250420_02530938_09.jpg');
  images[9] = loadImage('images/img20250420_02530938_10.jpg');
  images[10] = loadImage('images/img20250420_02530938_11.jpg');
  images[11] = loadImage('images/img20250420_02530938_12.jpg');
  images[12] = loadImage('images/img20250420_02530938_13.jpg');
  images[13] = loadImage('images/img20250420_02530938_14.jpg');
  images[14] = loadImage('images/img20250420_02530938_15.jpg');
  images[15] = loadImage('images/img20250420_02530938_16.jpg');
  images[16] = loadImage('images/img20250420_02530938_17.jpg');
  images[17] = loadImage('images/img20250420_02530938_18.jpg');
  images[18] = loadImage('images/img20250420_02530938_19.jpg');
  images[19] = loadImage('images/img20250420_02530938_20.jpg');
  images[20] = loadImage('images/img20250420_02530938_21.jpg');
  images[21] = loadImage('images/img20250420_02530938_22.jpg');
  images[22] = loadImage('images/img20250420_02530938_23.jpg');
  
  // Add more loadImage calls in the order you want them to appear
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  // No continuous drawing needed
}

function mouseClicked() {
  if (images.length > 0) {
    let currentImage = images[imageIndex % images.length]; // Use modulo to loop
    
    image(currentImage, mouseX, mouseY);
    imageIndex++; // Move to the next image for the next click
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}