var i;
var y;
let ragged = [];
var yOne;
var yTwo;
var yThree;
var yFour;
var yFive;

function setup() {
    createCanvas(1600, 1200);
    background(0);
    ragged = new Ragged();
    noLoop();
}
        
class Ragged {
    constructor() {
    
    }
    show() {
        noFill();
        stroke(255, 255, 20);
        strokeWeight(.2);
        beginShape();
            vertex(xOne + i, yOne + y);
            vertex(xOne + i, yTwo + y);
            vertex(xTwo + i, yOne + y);
            vertex(xTwo + i, yOne + y);
            vertex(xTwo + i, yThree + y);
            vertex(xThree + i, yThree + y);
            vertex(xThree + i, yFour + y);
            vertex(xThree + i, yFour + y);
            vertex(xOne + i, yFive + y);
            vertex(xOne + i, yFive + y);
            vertex(xTwo + i, yFive + y);
            vertex(xFour + i, yFour + y);
            vertex(xFour + i, yFour + y);
            vertex(xOne + i, yFour + y);
            vertex(xFive + i, yOne + y);
            vertex(xFive + i, yOne + y);
            vertex(xOne + i, yOne + y);
        endShape(CLOSE);
    }
}

function draw() {
    for (i = 0; i < width; i += 100) {
        for (y = 0; y < height; y += 100) {
            xOne = random(50);
            xTwo = random(55, 100);
            xThree = random(110, 170);
            xFour = random(-50);
            xFive = random(-55, -100);
            
            yOne = random(30);
            yTwo = random(50, 90);
            yThree = random(140, 180);
            yFour = random(-30, -1);
            yFive = random(-80, -31);
            ragged.show();
        }
    }
}

function mousePressed() {
  redraw(); 
}
    
