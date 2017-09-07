/**
 * Created by bogdan makarenko on 04.09.2017.
 */

// /* jshint -W097 */
// 'use strict';

//Дан ul, в нем несколько li.Под ul сделайте кнопку,
// по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.
//Cделайте так, чтобы при клике на каждый li,
//ему в конец добавлялся '!'. Это должно работать и для вновь добавленных l.

$(function(){

    //Adding the new item to the list
    $('#button').on('click', function() {
        $('#list').append('<li>Item</li>');
    });

    // Adding or Deleting the exclamation mark
    $('#list').on('click', 'li', function (){
        var text = $(this).text();

        text = text.split('');
        if(text[text.length-1] != '!'){
            text = text.join('');
            text = text + '!';
        } else if(text[text.length-1] == '!'){
            text[text.length-1] = '';
            text = text.join('');
        }
        $(this).text(text);
    });

});