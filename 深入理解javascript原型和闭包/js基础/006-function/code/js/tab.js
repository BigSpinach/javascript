var tabBox = document.getElementById('tabBox'),
    oList = tabBox.getElementsByTagName('li'),
    oDivList = tabBox.getElementsByTagName('div');

//=>合并
// for (var i = 0; i < oList.length; i++) {
//     oList[i].myIndex = i;
//     oList[i].onclick = function () {
//         for (var j = 0; j < oList.length; j++) {
//             oList[j].className = oDivList[j].className = null;
//         }
//         // this.className = 'select';
//         // oDivList[this.myIndex].className = 'select';
//         this.className = oDivList[this.myIndex].className = 'select';
//     }
// }

var previousIndex = 0;//=>存储的是上一个被选中LI的索引(默认页面选中的是第一个,所以我们设置初始值是零)

for (var i = 0; i < oList.length; i++) {
    oList[i].currentIndex = i;//->分别给每一个LI设置一个自定义属性用来存储当前LI的索引

    oList[i].onclick = function () {
        if (this.currentIndex === previousIndex) {
            return;//=>当前点击这个LI和上一次选中的LI是同一个,此时我们不需要重新做页卡切换:在函数中遇到RETURN后面代码不执行
        }

        //->先清除上一个选中LI的样式
        oList[previousIndex].className = oDivList[previousIndex].className = null;

        //->再让当前点击的这个LI有选中的样式
        this.className = oDivList[this.currentIndex].className = 'select';

        //->让previousIndex的值从新修改为当前点击LI的索引，这样再下一次点击的时候，当前选中的这个才是下一次点击要清除的上一个LI
        previousIndex = this.currentIndex;
    }
}
