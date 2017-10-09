/**
 * Created by Bogdan on 09.10.2017.
 */

//Выведет Иванов Иван Иванович
// через 5 секунд
let name = '';

let promise = new Promise(function(resolve, reject) {
    resolve();
    // reject('Error');
});

function setName(){
    return new Promise(function(resolve){
        setTimeout(function() {
            name += 'Ivanov ';
            resolve();
        },1000)
    });
}
function setSurname(){
    return new Promise(function(resolve){
        setTimeout(function() {
            name += 'Ivan ';
            resolve();
        }, 1500)
    });
}
function setThirdName(){
    return new Promise(function(resolve){
        setTimeout(function() {
            name += 'Ivanovich';
            resolve();
        }, 1000)
    });
}
function getFullName() {
    setTimeout(function(){
        console.log(name);
    }, 1500)
}

promise
    .then(setName)
    .then(setSurname)
    .then(setThirdName)
    .then(getFullName)
    .catch(function(error){
        console.error(error);
    });