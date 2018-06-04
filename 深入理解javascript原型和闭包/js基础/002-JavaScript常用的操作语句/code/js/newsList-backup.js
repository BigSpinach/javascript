/*
 * 需求：让所有LI中的偶数行背景颜色变为#EEE
 */
var hotNewsBox = document.getElementById('hotNews');
var newsList = hotNewsBox.getElementsByTagName('li');
for (var i = 0; i < newsList.length; i++) {
    var curLi = newsList[i];
    //=>此处我们需要先把当前元素的背景颜色存储在一个自定义的属性名上:myBg
    if (i % 2 === 1) {
        curLi.style.backgroundColor = '#EEE';
        curLi.myBg = '#EEE';
    } else {
        curLi['myBg'] = '#FFF';//=>curLi是一个元素对象(对象数据类型)
    }

    //->鼠标滑过变颜色：每一次循环都给当前操作的这个LI绑定一个鼠标滑过的事件,当鼠标滑过这个LI的时候,执行绑定的方法(函数),把需要做的事情放在函数中即可
    curLi.onmouseover = function () {
        //=>this:代表的就是当前操作的这个LI(鼠标滑过的这个LI)
        this.style.backgroundColor = 'lightblue';
    };

    //->鼠标离开：让其回归原有的颜色
    curLi.onmouseout = function () {
        this.style.backgroundColor = this.myBg;//=>此处需要用到之前存储在myBg这个属性上的属性值(元素的原有背景颜色)
    };
}

/*
 * 自定义属性思想：
 *   真实项目中凡是符合，之前的一些信息，我们需要在后续某些操作的时候拿来使用，此时我们就可以在之前把信息存储在元素的一个属性名上(而这个属性名是自定义的)，后续使用的时候我们把属性值获取到使用即可
 */












