let slider_red;
let slider_green;
let slider_blue;
let slider_alpha;

/*
* 
*
*
*/
function setup() {
  createCanvas(640, 240);
  text("Red slider", 10, 240);
  slider_red = createSlider(0, 255, 0, 1);
  text("green slider", 200, 240);
  slider_green = createSlider(0, 255, 0, 1);
  text("blue slider", 400, 240);
  slider_blue = createSlider(0, 255, 0, 1);
  text("alpha slider", 520, 240);
  slider_alpha = createSlider(0, 255, 10, 1);
}

function draw() {
  let x = randomGaussian(320, 40);
  let y = randomGaussian(120, 10);

  let r = randomGaussian(0, slider_red.value());
  let g = randomGaussian(0, slider_green.value());
  let b = randomGaussian(0, slider_blue.value());
  let alpha = slider_alpha.value();

  noStroke();
  fill(r, g, b, alpha);
  circle(x, y, 15);
}
