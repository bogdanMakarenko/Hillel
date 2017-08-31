/**
 * Created by bogdan makarenko on 22.08.2017.
 */

/* jshint -W097 */
'use strict';

// #9.2
/*
 Есть дерево из тегов <ul>/<li>.

 Напишите код, который для каждого элемента <li> выведет:

 Текст непосредственно в нём (без подразделов).
 Количество вложенных в него элементов <li> – всех, с учётом вложенных.
*/

function getListInfo() {
    var liList = document.getElementsByTagName('li');
    var i = 0, liNumber = 1;

    function getLiText() {
        var text = null;
        var nodesList = liList[i].childNodes;
        var liTextArr = [];

        for(let j=0, k=0; j<nodesList.length; j++) {
            if(nodesList[j].nodeType === 3){
                liTextArr[k] = nodesList[j].nodeValue;
                k++;
            }
        }
        text = liTextArr.join('');
        return text.trim();
    }

    function innerLiCounter() {
        var liElement = liList[i].getElementsByTagName('li');
        return liElement.length;
    }

    for(i = 0; i<liList.length; liNumber++, i++){
        console.log('li' + liNumber + ': ' + getLiText() + '\n' + 'inner li: ' + innerLiCounter());
    }
}
getListInfo();


