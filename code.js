void setup() {
size(800,800);
}

var xPos = 200;
var yPos = 200;

void draw() {

xPos = mouseX;
yPos = mouseY;
background(25,150,100);
fill(100,50,100);
rect(200,200,200,200);
fill(50,100,50);
rect(xPos,yPos,50,50);

};