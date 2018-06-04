var newsBox = document.getElementById("newsBox");
var oList = newsBox.getElementsByTagName("li");

//==>左素倩同学的作品
// for (var i = 0; i < oList.length; i++) {
//     var n = i % 3,
//         curLi = oList[i];
//     if (n === 0) {
//         curLi.style.backgroundColor = '#555';
//     } else if (n === 1) {
//         curLi.style.backgroundColor = '#eee';
//     } else {
//         curLi.style.backgroundColor = '#ddd';
//     }
// }

//==>薛嘎同学的作品
// for (var i = 0; i < oList.length; i++) {
//     var n = i % 3,
//         curLi = oList[i];
//     switch (n) {
//         case 0:
//             curLi.style.backgroundColor = '#555';
//             break;
//         case 1:
//             curLi.style.backgroundColor = '#eee';
//             break;
//         default:
//             curLi.style.backgroundColor = '#ddd';
//     }
// }

//==>唐元帅同学的作品
// for (var i = 0; i < oList.length; i++) {
//     i % 3 === 0 ? curLi.style.backgroundColor = '#555' : (i % 3 === 1 ? curLi.style.backgroundColor = '#eee' : curLi.style.backgroundColor = '#ddd');
// }

// for (var i = 0; i < oList.length; i++) {
//     var curLi = oList[i];
//     switch (i % 3) {
//         case 0:
//             curLi.className = "c1";
//             break;
//         case 1:
//             curLi.className = "c2";
//             break;
//         case 2:
//             curLi.className = "c3";
//     }
// }

// for (var i = 0; i < oList.length; i++) {
//     /*余数   样式
//      0      c1
//      1      c2
//      2      c3
//      n      c(n+1)*/
//     oList[i].className = 'c' + (i % 3 + 1);
// }


// for (var i = 0; i < oList.length; i++) {
//     var n = i % 3,
//         bg = oList[i].style.backgroundColor;
//     switch (n) {
//         case 0:
//             bg = '#555';
//             break;
//         case 1:
//             bg = '#eee';
//             break;
//         default:
//             bg = '#ddd';
//     }
// }

// for (var i = 0; i < oList.length; i++) {
//     var n = i % 3,
//         bg = oList[i].style;
//     switch (n) {
//         case 0:
//             bg.backgroundColor = '#555';
//             break;
//         case 1:
//             bg.backgroundColor = '#eee';
//             break;
//         default:
//             bg.backgroundColor = '#ddd';
//     }
// }

for (var i = 0; i < oList.length; i++) {
    oList[i].className = 'c' + (i % 3 + 1);
    //=>开始循环的时候我们把已经计算好的CLASS存储在当前这个LI元素的一个自定义属性上
    oList[i].myBg = oList[i].className;

    oList[i].onmouseover = function () {
        //this:当前鼠标滑过的那个LI(我们操作的那个LI)
        this.className = 'hover';
    };

    oList[i].onmouseout = function () {
        //=>鼠标离开，我们从之前存储的自定义属性中获取原有的CLASS值
        this.className = this.myBg;
    };
}

// i=0
// oList[0].className = 'c1';
// oList[0].onmouseout = function () {
//     "this.className = 'c' + (i % 3 + 1);"
// }//=>创建一个方法:函数体中存储的都是字符串  循环结束，鼠标离开第一个LI触发方法执行，此时把函数体中之前存储的字符串变为代码执行 this.className = 'c' + (i % 3 + 1);
//
// i=1
// oList[1].className = 'c2';
// oList[1].onmouseout = function () {
//     "this.className = 'c' + (i % 3 + 1);"
// }
//
// ...
//
// i=9
// oList[9].className = 'c1';
// oList[9].onmouseout = function () {
//     "this.className = 'c' + (i % 3 + 1);"
// }
//
// i=10 循环结束






