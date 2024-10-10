let randomCounts = [];

let total = 80;

function setup() {
  createCanvas(640, 240);
  for(let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;
  stroke(0);
  fill(100, 240, 20);
  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w-1, randomCounts[x])
  }
}
