let poem = [
    "In realms of code, where pixels gleam,",
    "A canvas waits, a digital dream.",
    "With strokes of color, lines take flight,",
    "A visual verse, bathed in soft light.",
    "The mouse, a wand, with clicks so free,",
    "Unleashes shapes for all to see.",
    "As fingers glide, the scroll takes hold,",
    "A moving story, yet to unfold.",
    "From right it enters, a staggered grace,",
    "Each line delayed in time and space.",
    "Across the screen, a gentle flow,",
    "Where words like images start to grow.",
    "Then fades away, beyond the left,",
    "A fleeting moment, a visual theft.",
    "The poem's journey, on scroll's command."
  ];
  
  let poemX = [];
  let poemY = [];
  let offsets = [];
  let scrollPosition = 0;
  let lineHeight = 30;
  let stanzaGap = 60;
  let stanzaLengths = [1, 1, 1, 1, 1];
  
  let bgElement; // To store the HTML background text element
  
  function setup() {
    createCanvas(windowWidth * 2, poem.length * lineHeight + (stanzaLengths.length - 1) * stanzaGap);
    textFont('monospace');
    textSize(20);
    textAlign(LEFT, TOP);
    noStroke();
  
    // Get the background text element from the DOM
    bgElement = document.querySelector('.en-landing');
  
    // Initialize poem line positions
    let currentY = lineHeight + 100; // Adjust starting Y to be below background text
    for (let i = 0; i < poem.length; i++) {
      poemX[i] = width;
      poemY[i] = currentY;
      offsets[i] = random(40, 120) * i;
      currentY += lineHeight;
      if ((i + 1) % stanzaLengths.reduce((sum, val) => sum + val, 0) === 0 && i < poem.length - 1) {
        currentY += stanzaGap;
      }
    }
  }
  
  function draw() {
    background(240);
    scrollPosition = -windowYOffset;
  
    // Draw the poem lines with inversion based on HTML element overlap
    textSize(20);
    for (let i = 0; i < poem.length; i++) {
      let targetX = 50 + offsets[i];
      let currentPoemX = lerp(poemX[i], targetX + scrollPosition * 0.5, 0.05);
      let currentPoemY = poemY[i] + scrollPosition * 0.2;
  
      if (bgElement) {
        // Get the bounding box of the current poem line on the canvas
        let poemBounds = {
          x: currentPoemX,
          y: currentPoemY,
          w: textWidth(poem[i]),
          h: 20 // Approximate height based on textSize
        };
  
        // Get the bounding box of the HTML background text element
        const bgRect = bgElement.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
  
        let bgBounds = {
          x: bgRect.left - canvasRect.left,
          y: bgRect.top - canvasRect.top,
          w: bgRect.width,
          h: bgRect.height
        };
  
        // Check for overlap
        if (poemBounds.x + poemBounds.w > bgBounds.x &&
            poemBounds.x < bgBounds.x + bgBounds.w &&
            poemBounds.y + poemBounds.h > bgBounds.y &&
            poemBounds.y < bgBounds.y + bgBounds.h) {
  
          // If overlapping, draw the inverted part
          drawingContext.globalCompositeOperation = 'difference';
          fill(255); // Assuming background text is dark
          text(poem[i], currentPoemX, currentPoemY);
          drawingContext.globalCompositeOperation = 'source-over'; // Reset
  
          // Draw the non-overlapping part (optional, for more precise inversion)
          fill(0); // Original poem color
          // For simplicity, we're inverting the whole line if any part overlaps
        } else {
          // If not overlapping, draw with the original color (black)
          fill(0);
          text(poem[i], currentPoemX, currentPoemY);
        }
      } else {
        // If the background element isn't found, just draw the poem
        fill(0);
        text(poem[i], currentPoemX, currentPoemY);
      }
  
      poemX[i] = currentPoemX; // Update poemX
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth * 2, poem.length * lineHeight + (stanzaLengths.length - 1) * stanzaGap);
    for (let i = 0; i < poem.length; i++) {
      poemX[i] = width;
    }
  }