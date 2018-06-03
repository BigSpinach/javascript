var tabBox = document.getElementById('tabBox'),
    oList = tabBox.getElementsByTagName('li'),
    oDivList = tabBox.getElementsByTagName('div');
function changeTab(index) {
    //=>index:存储当前点击LI的索引
    for (var i = 0; i < oList.length; i++) {
        oList[i].className = oDivList[i].className = null;
    }
    oList[index].className = oDivList[index].className = 'select';
}

//-------------------
// for (var i = 0; i < oList.length; i++) {
//     oList[i].onclick = function () {
//         changeTab(i);//=>不行的原因：给当前LI点击事件绑定方法的时候,绑定的方法并没有执行（点击的时候才执行），循环3次，分别给3个LI的点击事件绑定了方法，循环完成后i=3(全局的)；当点击的时候，执行绑定的方法，形成一个私有的作用域，用到了变量i，i不是私有的变量，向全局查找，此时全局的i已经是最后循环的3了
//     }
// }

//自定义属性----------------
// for (var i = 0; i < oList.length; i++) {
//     oList[i].myIndex = i;
//     oList[i].onclick = function () {
//         changeTab(this.myIndex);
//     }
// }

//闭包机制实现--------
// for (var i = 0; i < oList.length; i++) {
//     oList[i].onclick = (function (i) {
//         return function () {
//             changeTab(i);
//         }
//     })(i);
// }
// for (var i = 0; i < oList.length; i++) {
//     ~function (i) {
//         oList[i].onclick = function () {
//             changeTab(i);
//         }
//     }(i);
// }

//ES6中的块级作用域--------------
// for (let i = 0; i < oList.length; i++) {
//     oList[i].onclick = function () {
//         changeTab(i);
//     }
// }