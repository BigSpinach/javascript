/*
 * 需求：让所有LI中的偶数行背景颜色变为#EEE
 */
var hotNewsBox = document.getElementById('hotNews');
var newsList = hotNewsBox.getElementsByTagName('li');
for (var i = 0; i < newsList.length; i++) {
    var curLi = newsList[i];
    if (i % 2 === 1) {
        curLi.style.backgroundColor = '#EEE';
        curLi.myBg = '#EEE';
    } else {
        curLi['myBg'] = '#FFF';
    }

    curLi.onmouseover = function () {
        this.style.backgroundColor = 'lightblue';
    };

    curLi.onmouseout = function () {
        this.style.backgroundColor = this.myBg;
    };
}

/*
 * 自定义属性思想：
 *   真实项目中凡是符合，之前的一些信息，我们需要在后续某些操作的时候拿来使用，此时我们就可以在之前把信息存储在元素的一个属性名上(而这个属性名是自定义的)，后续使用的时候我们把属性值获取到使用即可
 */












