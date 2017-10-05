var ball = document.querySelector('#ball');

document.querySelector('#button').addEventListener('click', animateBall);
document.querySelector('#button2').addEventListener('click', finishAnimation);

var handler = null;

function animateBall() {
  var ballStyle = getComputedStyle(ball);
  var leftValue = parseInt(ballStyle.left) + 4;
  
  var angle = getDegreeValue();
  angle += 4;	

  // Getting degree value of transform property
 	function getDegreeValue() {
 	  var transformValue = ballStyle.transform;
 	  var values = transformValue.split('(')[1].split(')')[0].split(',');
 	  var a = values[0];
 	  var b = values[1];
 	  var c = values[2];
 	  var d = values[3];

 	  var scale = Math.sqrt(a * a + b * b);
 	  var sin = b / scale;
 	  return angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
 	}

  // Change css styles for our ball 
  if (leftValue > 500){
  	return false;
  }

  ball.style.left = (leftValue < 500) ? leftValue + 'px' : '100px';
  ball.style.transform = 'rotate(' + angle + 'deg)';

  handler = setTimeout(function(){
  	if(leftValue < 500){
  		animateBall();
  	}
  }, 50)
}

function finishAnimation() {
	clearTimeout(handler);
}	