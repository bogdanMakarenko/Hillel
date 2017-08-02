/**
 * Created by bogdan.makarenko on 01.08.2017.
 */

// Working with functions

// max(a, b) function
// #5.1
/*
function max(a, b){
    if(isFinite(a) == true && isFinite(b) == true){
        if(a > b){
            return a;
        }
        else {
            return b;
        }
    }
    else {
        return 'Please input correct data';
    }
}

// Check-up
max(42, 32); // 42
max(-32, -12); // -12
max(3, 3); // 3
max(NaN, 32); // 'Please input correct data'*/

// object copy
// #5.2
/*var footballTeam = {
    name: 'Manchester United',
    country: 'England',
    costInEuro: 2e9
};
var footballPlayer = {
    name: 'Wayne',
    surname: 'Rooney',
    team: footballTeam.name
};
var emptyObject = {};

function copyProperties(copiedObject, cloneObject){
    for(var key in copiedObject){
        cloneObject[key] = copiedObject[key];
    }
    return copiedObject; // used for console output
}

// Check-up
console.log(copyProperties(footballPlayer, emptyObject)); // correct
console.log(copyProperties(footballTeam, emptyObject)); //correct*/

// Power function
// #5.3
/*
function power(number, pow){
    var result = number;
    if(pow > 0){
        for(var i = 1; i < pow; i++){
            result = result * number;
        }
    }
    else if(pow < 0){
        for(var i = -1; i > pow; i--){
            result = (result * number);
        }
        result = 1/result;
    } else {
        result = 1;
    }
    return result;
}

//Check-up
console.log(power(5, 6)); // 15625
console.log(power(5, 0)); // 1
console.log(power(5, -3)); // -125*/

// recursion object copy
// #5.4
var footballTeam = {
    name: 'Manchester United',
    country: 'England',
    costInEuro: 2e9
};
var footballPlayer = {
    name: 'Wayne',
    surname: 'Rooney',
    team: footballTeam
};
var emptyObject = {};

function copyProperties(copiedObject, cloneObject){
    for(var key in copiedObject){
        if(typeof copiedObject[key] == 'object') {
            someObj = new Object();
            for(key2 in copiedObject[key]){
                someObj[key2] = copiedObject[key][key2]
            }
            cloneObject[key] = someObj;
        } else {
            cloneObject[key] = copiedObject[key];
        }
    }
    return cloneObject; // used for console output
}

console.log(copyProperties(footballPlayer, emptyObject)); // correct