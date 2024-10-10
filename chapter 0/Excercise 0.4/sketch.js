class Walker {
  constructor() {
      this.x = width / 2;
      this.y = height / 2;
  }

  show() {
      stroke(0);
      point(this.x, this.y);
  }
 // Excercise 0.3
 // Create a walker that has a chance to follow the mouse position
  step() {
    let xstep = randomGaussian();
    let ystep = randomGaussian();

    console.log("xstep ist: %f", xstep);
    console.log("ystep ist: %f", ystep);

    this.x += xstep;
    this.y += ystep;
  }
}

let walker;

function setup() {
  createCanvas(640, 480);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}
