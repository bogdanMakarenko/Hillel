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
} else {
    (a + b < 4) ? (result = 'Меньше') : (result = 'Больше');
    alert(result);
}

// Перепишите if..else с использованием нескольких операторов '?'.
//# 3.2

var message, login;
(login == 'Вася') ? (message = 'Привет') : ((login == '') ? (message = 'Нет логина') : message = '');

/*
 Используя конструкцию if..else, напишите код,
 который получает значение prompt, а затем выводит alert:
 */
//# 3.3

var mediumValue = prompt('Input number', '');
if(mediumValue > 0){
    alert(1);
} else if(mediumValue < 0){
    alert(-1);
}
else if(mediumValue == 0){
    alert(0);
}
else{
    alert('Incorrect input');
}

// Подумайте что выведет alert
//# 3.4

alert( 1 && null && 2 ); --> null

alert( null || 2 || undefined ); --> 2

alert( null || 2 && 3 || 4 ); --> 3

/*
 Напишите условие if для проверки того факта, что переменная age
 находится между 14 и 90 включительно.
 */
//# 3.5

var age = prompt('Input number', '');

if(age >= 14 && age <= 90){
    alert('YOur age is suitable');
}
else {
    alert('Your age isn\'t suitable');
}
