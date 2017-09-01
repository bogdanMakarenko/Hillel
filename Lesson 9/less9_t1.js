/**
 * Created by bogdan makarenko on 31.08.2017.
 */

// #9.1
/*
 Напишите интерфейс для создания списка.

 Для каждого пункта:

 Запрашивайте содержимое пункта у пользователя с помощью prompt.
 Создавайте пункт и добавляйте его к UL.
 Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
 Все элементы должны создаваться динамически.

 Если посетитель вводит теги – пусть в списке они показываются как обычный текст
 */

var butt = document.getElementById('button');
var text = document.getElementById('textfield');
var ul = document.getElementById('myList');


butt.addEventListener('click', function(){
    var listText = text.value;
    var li = document.createElement('li');

    li.innerText = listText;

    if(text.value.trim()){
        ul.appendChild(li);
    }
    text.value = '';
});


