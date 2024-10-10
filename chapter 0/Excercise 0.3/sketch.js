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
    let r = random(1);
    let rm = random(1);
    console.log("rm ist: %f", rm)
    if (rm < 0.2) {
      //console.log("mousex ist %d", mouseX);
      //console.log("mousey ist %d", mouseY);

      /*
      * How it works to follow the mouse position:
      * each time rm is < X the current positions of the walker are checked against the mouse position on the canvas
      * as long as X and/or Y are not on the same position as mouseX/mouseY the walker will be put
      * on step in the direction of the cursor position.
      *
      */
      if (this.x < mouseX) {
        this.x++;
      }
      if (this.x > mouseX) {
        this.x--;
      }
      if (this.y < mouseY) {
        this.y++;
      }
      if (this.y > mouseY) {
        this.y--;
      }
    }
    else {
      let xstep = random(-1, 1);
      let ystep = random(-1, 1);
      this.x += xstep;
      this.y += ystep;
    }
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
