let poem = [
  "The Heights, a microcosm of the American Dream",
  "The nucleus of Dominicanidad in New York",
  "We find home in these tiendas ",
  "owned by our mothers and ties.",
  "We seek solace in frio frios and pastelitos.",
  "This land is our flesh and bone,",
  "our home away from home on Broadway ",
  "and it shows…,",
  "WASHINGTON HEIGHTS ",
  "BY DILSON HERNANDEZ"
];

let poemX = [];
let poemY = [];
let offsets = [];
let scrollPosition = 0;
let lineHeight = 30;
let stanzaGap = 60;
let stanzaLengths = [1, 1, 1, 1, 1];
let horizontalSpeed = 1; // Adjust for the speed of horizontal movement

function setup() {
  noCanvas();
  textFont('monospace');
  textSize(20);
  textAlign(CENTER,CENTER);

  let currentY = lineHeight;
  for (let i = 0; i < poem.length; i++) {
    poemX[i] = -width; // Start off-screen to the left
    poemY[i] = currentY;
    offsets[i] = random(40, 120) * i; // Horizontal stagger
    currentY += lineHeight;
    if ((i + 1) % stanzaLengths.reduce((sum, val) => sum + val, 0) === 0 && i < poem.length - 1) {
      currentY += stanzaGap;
    }
  }
}

function draw() {
  background(240);

  for (let i = 0; i < poem.length; i++) {
    let targetX = 50 + offsets[i] + scrollPosition * horizontalSpeed; // Move based on scroll
    poemX[i] = lerp(poemX[i], targetX, 0.05);
    text(poem[i], poemX[i], poemY[i] - scrollPosition * 0.2); // Optional slight vertical movement
  }
}

function mouseWheel(event) {
  scrollPosition += event.deltaY * 0.1; // Adjust sensitivity of scroll to movement
  // Optionally clamp the scrollPosition to prevent infinite scrolling
  // scrollPosition = constrain(scrollPosition, 0, someMaxValue);
}

function windowResized() {
  resizeCanvas(windowWidth * 2, poem.length * lineHeight + (stanzaLengths.length - 1) * stanzaGap);
  for (let i = 0; i < poem.length; i++) {
    poemX[i] = -width; // Reset x position on resize
  }
  scrollPosition = 0; // Reset scroll position on resize
}