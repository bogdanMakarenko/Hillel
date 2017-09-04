/**
 * Created by bogdan makarenko on 04.09.2017.
 */

function circleMoving(){
    var ball = document.getElementById('ball');
    var ballCenterX = event.pageX;
    var ballCenterY = event.pageY;

    var ballTop = ballCenterY - (ball.clientHeight/2 + ball.clientTop);
    var ballLeft = ballCenterX - (ball.clientWidth/2 + ball.clientLeft);

    ball.style.top = ballTop + 'px';
    ball.style.left = ballLeft + 'px';


    // change circle color
    var r, g, b;

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    ball.style.borderColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

document.body.addEventListener('click', circleMoving);