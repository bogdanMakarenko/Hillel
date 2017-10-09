/**
 * Created by Bogdan on 09.10.2017.
 */

function delay(timer) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve();
            reject();
        }, timer)
    })
}

delay(2000)
    .then(function() {
        console.log('Hello')
    });