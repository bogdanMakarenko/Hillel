var canvasT1 = document.querySelector('#t1');
var contentT1 = canvasT1.getContext('2d');

var positionX = 100;
var positionY = 100;

// Drawing circle
function drawCirlce(){
	contentT1.beginPath();

	contentT1.strokeStyle = 'red';
	contentT1.fillStyle = 'red';
	contentT1.arc(
	  positionX, positionY,
	  40,
	  0, 2 * Math.PI
	);
	contentT1.fill();

	contentT1.stroke();
}
// Interection with circle
function circleMovement(e){
	let currPosX = positionX;
	let currPosY = positionY;
	
	switch(e.keyCode){
		case 37:
			positionX -= 20;
			break;
		case 38:
			positionY -= 20;
			break;
		case 39:
			positionX += 20;
			break;
		case 40:
			positionY += 20;
			break;
	}

	// Check if circle is in the canvas area
	if ( (positionX < 40 || positionX > 560) || (positionY < 40 || positionY > 560) ) {
			positionX = currPosX;
			positionY = currPosY;
	}
	contentT1.clearRect(0,0,600,600);
	drawCirlce();
}

document.body.addEventListener('keydown', circleMovement);
drawCirlce();