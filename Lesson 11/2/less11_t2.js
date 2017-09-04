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

    function liRemove() {
        ul.children[i].remove();
    }

    for(var i=0; i < ul.children.length; i++){
        liRemove();
    }

    for(var j=0; j < textArr.length; j++){
        liAddition();
    }

    console.log(textArr);

}

var inputField = document.getElementById('text');
inputField.addEventListener('keyup', keyPressInterception);