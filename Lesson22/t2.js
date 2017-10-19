var canvasT2 = document.querySelector('#t2');
var contentT2 = canvasT2.getContext('2d');

var mouseX = 100;
var mouseY = 100;

// Drawing circle
function drawMouse(){
	contentT2.beginPath();

	// mouse style
	contentT2.strokeStyle = 'black';
	contentT2.fillStyle = "blue";

	contentT2.moveTo(mouseX, mouseY);
	contentT2.lineTo(mouseX+20, mouseY-20);
	contentT2.lineTo(mouseX+40, mouseY);
	contentT2.lineTo(mouseX+25, mouseY);
	contentT2.lineTo(mouseX+25, mouseY+20);
	contentT2.lineTo(mouseX+15, mouseY+20);
	contentT2.lineTo(mouseX+15, mouseY);

	contentT2.closePath();
	contentT2.fill();
	contentT2.stroke();
}

// Find mouse position
function mouseMovement(e){
	mouseX = e.offsetX;
	mouseY = e.offsetY;
	contentT2.clearRect(0,0,600,600);
	drawMouse();
}

drawMouse();
document.querySelector('#t2').addEventListener('mousemove', mouseMovement);
