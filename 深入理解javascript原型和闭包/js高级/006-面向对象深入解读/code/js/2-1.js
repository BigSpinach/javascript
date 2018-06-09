var btnBox = document.getElementById('btnBox'),
    inputs = btnBox.getElementsByTagName('input');
var l = inputs.length;
// for (var i = 0; i < l; i++) {//=>循环结束i=5
//     inputs[i].onclick = function () {
//         alert(i);
//     }
// }
/*
 * 上面的代码为啥不行?
 *  所有的事件绑定都是异步编程(绑定的时候方法并没有执行)，当触发点击事件，执行方法的时候，循环早已经结束了
 *
 *  同步：JS中当前这个任务没有完成，下面的任务都不会执行，只有等当前任务彻底完成才会执行下面的任务
 *  异步：JS中当前任务没有完成，需要等一会在完成，此时我们可以继续执行下面的任务
 */

//=>自定义属性
// for (var i = 0; i < l; i++) {
//     inputs[i].myIndex = i;
//     inputs[i].onclick = function () {
//         alert(this.myIndex);
//     }
// }

//=>闭包解决
// for (var i = 0; i < l; i++) {
//     ~function (i) {
//         inputs[i].onclick = function () {
//             alert(i);
//         }
//     }(i);
// }

// for (var i = 0; i < l; i++) {
//     inputs[i].onclick = (function (i) {
//         return function () {
//             alert(i);
//         }
//     })(i);
// }

//=>ES6(块级作用域)
for (let i = 0; i < l; i++) {
    inputs[i].onclick = function () {
        alert(i);
    }
}