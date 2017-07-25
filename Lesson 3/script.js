//Перепишите if с использованием оператора '?':
//# 3.1

//Initialized variables;
var a = prompt('Input a value', '');
var b = prompt('Input b value', '');
var result;
//Convert to number
a = +a;
b = +b;
//Check if values aren't finite
if(isFinite(a)==false || isFinite(b)==false){
    alert('Incorrect input');
} else{
    a + b < 4 ? result = 'Меньше' : result = 'Больше';
    alert(result);
}
