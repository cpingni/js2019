

const drawing = document.createElement("div");
drawing.setAttribute("id", "content");
document.body.appendChild(drawing);


var pickColor;
var canv;


function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2 +150;
  canv.position(x, y);
}

function setup(){
	let x = (windowWidth - width) / 3;
  let y = (windowHeight - height) / 2;
	pickColor = createColorPicker(color('green'));
	pickColor.style("background-color","white");
	pickColor.size(60,25);
	pickColor.position(x-26,y);
	let buttonC = createButton("Clear");
	buttonC.style("background-color","white");
 	buttonC.style("color","#000");
	buttonC.size(60,25);
	buttonC.position(x+40,y);

	canv = createCanvas(600,400);
	centerCanvas();
	background(100,100,100);
	canv.parent(drawing);
	buttonC.mousePressed(resetCanv);
}
function windowResized() {
  centerCanvas();
}

function draw(){
	//noStroke();
	//fill(pickColor.value());
	//ellipse(mouseX,mouseY,10,10);
	if (mouseIsPressed) {
		stroke(pickColor.value());
		strokeWeight(15);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function resetCanv(){
	var canv = createCanvas(600,400);
	background(100,100,100);
	canv.parent(drawing);
}
/*
function draw() {

  if (mouseIsPressed) {
    stroke(col);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  noStroke();
  fill(255, 0, 0);
  rect(0, 0, 100, 100);

  fill(0, 255, 0);
  rect(100, 0, 100, 100);

  fill(0, 0, 255);
  rect(200, 0, 100, 100);

}

function mousePressed() {
  if (mouseY < 100) {
    col = get(mouseX, mouseY);
  }
}
*/
