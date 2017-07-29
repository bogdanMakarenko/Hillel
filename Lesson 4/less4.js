/**
 * Created by bogdan.makarenko on 29.07.2017.
 */
// Working with loops [for], [while], [do..while] AND [switch]

//Replace loop for with while
// #4.1
var i = 0;
while(i<3){
    alert( "Цифра " + i );
    i++;
}

//Number bigger than 100
// #4.2
var num = 0;
while(num<=100) {
    num = prompt('Input number bigger than 100', '');
    if(num == null ){
        break;
    }
    else if(num<=100 || isFinite(+num) == false){
        num = true;
        alert('Please enter correct number');
    }
}

//Switch construction
// #4.3
var a = prompt('Input a number', '');
if(a != null) {
    switch (a) {
        case '0':
            alert(0);
            break;
        case '1':
            alert(1);
            break;
        case '2':
        case '3':
            alert('2, 3')
            break;
        default:
            alert('Unknown input');
    }
}

//Simple numbers
// #4.4

var lowBound = +prompt('Enter lower boundary', '0');
var upperBound = +prompt('Enter upper boundary', '10');
var counter = 0;
for(let i = lowBound; i <= upperBound; i++){
    for(let j = 1; j <= i; j++){
        if(i%j == 0){
            counter++;
        }
    }
    if(counter == 2){
        console.log(i);
    }
    counter = 0;
}