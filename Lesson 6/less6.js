/**
 * Created by bogdan.makarenko on 04.08.2017.
 */


// learn.javascript.ru
// Natural number check-up
/*function isInteger(num) {
   return (~~num) === num;
}*/
//Login check-up
/*
var login = prompt('Login:', '');
var password = null;

if(login == 'Admin'){
    password = prompt('Password', '');
    if(password == 'blacklord'){
        console.log('Welcome, my Lord')
    } else if(password == null){
        console.log('Declined')
    } else {
        console.log('Wrong password')
    }
} else if(login == null){
    console.log('Declined')
} else {
    console.log('I don\'t know you')
}*/




// нужно разобраться
/*var my_var = 'глобальная';

 function my_function() {
 var my_var = 'локальная';
 var some_function = new Function('console.log(my_var)');
 some_function();
 }
 my_function(); // 'глобальная'*/

/*var result = [];

for (var i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i);
    };
}

result[0](); // 5, ожидалось 0
result[1](); // 5, ожидалось 1
result[2](); // 5, ожидалось 2
result[3](); // 5, ожидалось 3
result[4](); // 5, ожидалось 4*/

/*function secretPassword() {
    var password = 'xh38sk';
    return {
        guessPassword: function (guess) {
            if (guess === password) {
                return true;
            } else {
                return false;
            }
        }
    }
}

var passwordGame = secretPassword();

passwordGame.guessPassword('heyisthisit?'); // false
passwordGame.guessPassword('xh38sk'); // true*/