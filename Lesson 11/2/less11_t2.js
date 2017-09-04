/**
 * Created by bogdan makarenko on 04.09.2017.
 */


function keyPressInterception(){
    var textValue = text.value;
    var textArr = textValue.split(' ');

    var ul = document.getElementById('output');

    function liAddition() {
        var li = document.createElement('li');
        li.innerText = textArr[j];
        ul.appendChild(li);
    }

    // clear list
    ul.innerHTML = '';

    for(var j=0; j < textArr.length; j++){
        liAddition();
    }
}

var inputField = document.getElementById('text');
inputField.addEventListener('keyup', keyPressInterception);