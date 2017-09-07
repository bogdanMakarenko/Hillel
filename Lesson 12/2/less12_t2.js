/**
 * Created by bogdan makarenko on 04.09.2017.
 */

// - выделите серым бекграундом и оранжевым текстом каждый второй параграф
// непосредственно внутри DIV
// - увеличьте шрифт всем последним параграфам
// - Сделай так чтобы при клике на парагарф p
// внутри блока sub он перемещался в родительский блок

$(function(){
    $('div > p:first-child').next().css({
        'background-color': 'grey',
        'color': 'orange'
    });

    $('div > p:last-child').css({
       'font-size': '20px'
    });

    $('.sub > p').click(function() {
        if($(this).parent().attr('class') == 'sub'){
            $(this).parent().parent().prepend($(this));
        }
    })

});