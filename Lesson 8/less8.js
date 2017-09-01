
/**
 * Created by bogdan makarenko on 15.08.2017.
 */

/* jshint -W097 */
"use strict";

// #8.1
    var obj = {
        x:1,
        y:1,
        getPosition: function(){
            return {x: this.x, y: this.y};
        }
    };
    var b = obj.getPosition(); //  вернет "{x:1,:y:1}"

// #8.3
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    var user = new User('Alex', 20);

// #8.4
    function Car(wheels, model) {
        this.wheels = wheels;
        this.model = model;

        this.getModel = function() {
            return this.model;
        };
        this.drive = function () {
            this.isDriving = true;
        };
    }
    var a = new Car(4, 'Toyota');
    a.getModel(); // Toyota
    a.drive();
    alert(a.isDriving); // true

// #8.5

// Написать функцию UserList которая принмает массив пользователей (строк)
// и возвращающую обьект БЕЗ СВОЙСТВ , но с методами

// addUser - Добавляет пользователя в конец списка
// getUsers - возвращает списко всех пользователей
// getUser(n) - возвращает одного пользователя по указанному индексу

function UserList(array) {

    this.addUser = function(user) {
        array.push(user);
    };
    this.getUsers = function() {
        for(var i = 0; i < array.length; i++) {
            console.log(array[i]    );
        }
    };
    this.getUser = function(n) {
        return array[n];
    };
}


var list = new UserList(['Admin', 'Vasya']);
list.addUser('Me');
list.getUser(2); // 'Me'
list.getUser(0); // 'Admin'
list.getUsers();

