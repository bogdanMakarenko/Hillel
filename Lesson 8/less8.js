/**
 * Created by bogdan makarenko on 15.08.2017.
 */

'use strict';

// #8.1
var obj = {
    x:1,
    y:1,
    getPosition: function(){
        return {x: this.x, y: this.y};
    }
};
obj.getPosition() //  вернет "{x:1,:y:1}"

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
    }
    this.drive = function () {
        this.isDriving = true;
    }
}
var a = new Car(4, 'Toyota');

a.getModel() // Toyota
a.drive();
alert(a.isDriving) // true

// #8.5
