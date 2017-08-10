/**
 * Created by bogdan_makarenko on 10.08.2017.
 */

// Arrays

// Describe how we can copy array
// # 7.2

var city = ['Kharkiv', 'Kiev', 'Odessa'];

// 1 перебрать все элементы по циклу и записать в новый массив
var cityCopy = [];
for(let i=0; i<city.length; i++){
    cityCopy[i] = city[i];
}

// 2 использовать метод slice()
var cityCopy2 = city.slice();

// 3 использовать метод splice()
// This method cut elements from initial array
var cityCopy3 = city.splice(0,city.length);

// 4 использовать метод concat()
var cityCopy4 = city.concat();


// Create function addClass(obj, cls)
// #7.3

var listOfClasses = {
className: 'open menu'
};

function addClass(obj, cls){
    cls = cls.trim();
    var arrClass = obj.className.split(' ');
    for(let i=0; i < arrClass.length; i++){
        if(arrClass[i] === cls){
            return 'You already have this class';
        }
    }
    arrClass.push(cls);
    obj.className = arrClass.join(' ');
    return obj.className;
}

addClass(listOfClasses, 'new');
console.log(addClass(listOfClasses, 'open'));
addClass(listOfClasses, 'me');

console.log(listOfClasses.className);


// reverse function for array
// #7.1 (Bonus)

var arr = [1, 2, 5, 4, 8, 7, 21];

function arrReverse(arr){
    var j = arr.length - 1, pre;
    for(var i = 0; i < j; i++, j--){
        pre = arr[i];
        arr[i] = arr[j];
        arr[j] = pre;
    }
}

arrReverse(arr);
console.log(arr);
