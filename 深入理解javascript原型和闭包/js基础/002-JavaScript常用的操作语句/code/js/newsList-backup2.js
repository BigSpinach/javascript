/*
 * 需求：让所有LI中的偶数行背景颜色变为#EEE
 */
var hotNewsBox = document.getElementById('hotNews');
var newsList = hotNewsBox.getElementsByTagName('li');
for (var i = 0; i < newsList.length; i++) {
    var curLi = newsList[i];
    // if (i % 2 === 1) {
    //     curLi.style.backgroundColor = '#EEE';
    // }
    //i % 2 === 1 ? curLi.style.backgroundColor = 'lightblue' : null;
    curLi.style.backgroundColor = (i % 2 === 1 ? 'orange' : '');
}













