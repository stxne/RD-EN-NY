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
  images[23] = loadImage('images/img20250420_02530938_24.jpg');
  images[24] = loadImage('images/img20250420_02530938_25.jpg');
  images[25] = loadImage('images/img20250420_02530938_26.jpg');
  images[26] = loadImage('images/img20250420_02530938_27.jpg');
  images[27] = loadImage('images/img20250420_02530938_28.jpg');
  images[28] = loadImage('images/img20250420_02530938_29.jpg');
  images[29] = loadImage('images/img20250420_02530938_30.jpg');
  images[30] = loadImage('images/img20250420_02530938_31.jpg');
  images[31] = loadImage('images/img20250420_02530938_32.jpg');
  images[32] = loadImage('images/img20250420_02530938_33.jpg');
  images[33] = loadImage('images/img20250420_02530938_34.jpg');
  images[34] = loadImage('images/img20250420_02530938_35.jpg');
  images[35] = loadImage('images/img20250420_02530938_36.jpg');
  images[36] = loadImage('images/img20250420_02530938_37.jpg');
  images[37] = loadImage('images/img20250420_02530938_38.jpg');
  images[38] = loadImage('images/img20250420_02530938_39.jpg');
  images[39] = loadImage('images/img20250420_02530938_40.jpg');
  images[40] = loadImage('images/img20250420_02530938_41.jpg');
  images[41] = loadImage('images/img20250420_02530938_42.jpg');
  images[42] = loadImage('images/img20250420_02530938_43.jpg');
  images[43] = loadImage('images/img20250420_02530938_44.jpg');
  images[44] = loadImage('images/img20250420_02530938_45.jpg');
  images[45] = loadImage('images/img20250420_02530938_46.jpg');
  images[46] = loadImage('images/img20250420_02530938_47.jpg');
  images[47] = loadImage('images/img20250420_02530938_48.jpg');
  images[48] = loadImage('images/img20250420_02530938_49.jpg');
  images[49] = loadImage('images/img20250420_02530938_50.jpg');
  images[50] = loadImage('images/img20250420_02530938_51.jpg');
  images[51] = loadImage('images/img20250420_02530938_52.jpg');
  images[52] = loadImage('images/img20250420_02530938_53.jpg');
  images[53] = loadImage('images/img20250420_02530938_54.jpg');
  images[54] = loadImage('images/img20250420_02530938_55.jpg');
  images[55] = loadImage('images/img20250420_02530938_56.jpg');
  images[56] = loadImage('images/img20250420_02530938_57.jpg');
  images[57] = loadImage('images/img20250420_02530938_58.jpg');
  images[58] = loadImage('images/img20250420_02530938_59.jpg');
  images[59] = loadImage('images/img20250420_02530938_60.jpg');
  images[60] = loadImage('images/img20250420_02530938_61.jpg');
  images[61] = loadImage('images/img20250420_02530938_62.jpg');
  images[62] = loadImage('images/img20250420_02530938_63.jpg');
  images[63] = loadImage('images/img20250420_02530938_64.jpg');
  images[64] = loadImage('images/img20250420_02530938_65.jpg');
  images[65] = loadImage('images/img20250420_02530938_66.jpg');
  images[66] = loadImage('images/img20250420_02530938_67.jpg');
  images[67] = loadImage('images/img20250420_02530938_68.jpg');
  images[68] = loadImage('images/img20250420_02530938_69.jpg');
  images[69] = loadImage('images/img20250420_02530938_70.jpg');
  images[70] = loadImage('images/img20250420_02530938_71.jpg');
  images[71] = loadImage('images/img20250420_02530938_72.jpg');
  images[72] = loadImage('images/img20250420_02530938_73.jpg');
  images[73] = loadImage('images/img20250420_02530938_74.jpg');
  images[74] = loadImage('images/img20250420_02530938_75.jpg');
  images[75] = loadImage('images/img20250420_02530938_76.jpg');
  images[76] = loadImage('images/img20250420_02530938_77.jpg');
  images[77] = loadImage('images/img20250420_02530938_78.jpg');
  images[78] = loadImage('images/img20250420_02530938_79.jpg');
  images[79] = loadImage('images/img20250420_02530938_80.jpg');
  images[80] = loadImage('images/img20250420_02530938_81.jpg');
  images[81] = loadImage('images/img20250420_02530938_82.jpg');
  images[82] = loadImage('images/img20250420_02530938_83.jpg');
  images[83] = loadImage('images/img20250420_02530938_84.jpg');
  images[84] = loadImage('images/img20250420_02530938_85.jpg');
  images[85] = loadImage('images/img20250420_02530938_86.jpg');
  images[86] = loadImage('images/img20250420_02530938_87.jpg');
  images[87] = loadImage('images/img20250420_02530938_88.jpg');
  images[88] = loadImage('images/img20250420_02530938_89.jpg');
  images[89] = loadImage('images/img20250420_02530938_90.jpg');
  images[90] = loadImage('images/img20250420_02530938_91.jpg');
  images[91] = loadImage('images/img20250420_02530938_92.jpg');
  images[92] = loadImage('images/img20250420_02530938_93.jpg');
  images[93] = loadImage('images/img20250420_02530938_94.jpg');
  images[94] = loadImage('images/img20250420_02530938_95.jpg');
  images[95] = loadImage('images/img20250420_02530938_96.jpg');
  images[96] = loadImage('images/img20250420_02530938_97.jpg');
  images[97] = loadImage('images/img20250420_02530938_98.jpg');
  images[98] = loadImage('images/img20250420_02530938_99.jpg');
  images[99] = loadImage('images/img20250420_02530938_100s.jpg');
  // Add more loadImage calls in the order you want them to appear
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  // No continuous drawing needed
}

function mouseDragged() {
  if (images.length > 0) {
    let currentImage = images[imageIndex % images.length]; // Use modulo to loop
    image(currentImage, mouseX, mouseY);
    imageIndex++; // Move to the next image for the next click
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}