/**
 * Created by bogdan makarenko on 31.08.2017.
 */

/* jshint -W097 */
'use strict';

// #10.2

// Сделать так чтобы при нажатии на кнопки красный круг двигался
// по 10 пикселей в соответствующую сторону
// Например нажимая UP круг смещается вверх на 10px

var left = document.getElementById('left');
var right = document.getElementById('right');
var up = document.getElementById('up');
var down = document.getElementById('down');
var target = document.getElementById('target');

function upMovement() {
    var position = getComputedStyle(target).top;
    position = parseInt(position, 10);
    position = position-10;
    target.style.top = position + 'px';
    target.style.transition = '0.5s';
}
function downMovement() {
    var position = getComputedStyle(target).top;
    position = parseInt(position, 10);
    position = position+10;
    target.style.top = position + 'px';
    target.style.transition = '0.5s';
}
function leftMovement() {
    var position = getComputedStyle(target).left;
    position = parseInt(position, 10);
    position = position-10;
    target.style.left = position + 'px';
    target.style.transition = '0.5s';
}
function rightMovement() {
    var position = getComputedStyle(target).left;
    position = parseInt(position, 10);
    position = position+10;
    target.style.left = position + 'px';
    target.style.transition = '0.5s';
}

up.addEventListener('click', upMovement);
down.addEventListener('click', downMovement);
left.addEventListener('click', leftMovement);
right.addEventListener('click', rightMovement);