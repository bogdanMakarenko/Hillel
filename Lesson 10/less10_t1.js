/**
 * Created by bogdan makarenko on 31.08.2017.
 */

/* jshint -W097 */
'use strict';

// #10.1

//Сделать кнопку которая при нажатии на нее исчезает
// (либо с помощью css либо просто удалить из DOM)

var button = document.getElementById('disappear');

button.addEventListener('click', function(){
    button.style.visibility = 'hidden';
});