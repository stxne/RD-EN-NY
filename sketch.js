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
    currentImage.resize(100,75)
    image(currentImage, mouseX, mouseY);
    imageIndex++; // Move to the next image for the next click
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}