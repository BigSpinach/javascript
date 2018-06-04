var box = document.getElementById('box');
var oList = box.getElementsByTagName('li');
var oDivList = box.getElementsByTagName('div');

//=>做一件事情(实现一个方法)：让所有的LI和DIV都先取消选中的样式,再给当前选中的LI以及对应的DIV增加选中样式即可
function change(index) {//->index:形参变量，也是传递内容的入口，以后执行这个方法传递进来的那个选中LI的索引就在index变量中存储着呢

    //->清空所有选中样式
    for (var i = 0; i < oList.length; i++) {
        oList[i].className = '';
        oDivList[i].className = '';
    }

    //->设置当前操作的有选中样式：编写这个方法的时候还不知道用户选中的是哪一个LI呢，此时我们给当前函数设置一个入口，以后执行这个函数的时候，把当前操作那个LI的索引传递进来即可
    oList[index].className = 'select';
    oDivList[index].className = 'select';
}

// oList[0].onclick = function () {
//     change(0);
// };
// oList[1].onclick = function () {
//     change(1);
// };
// oList[2].onclick = function () {
//     change(2);
// };

for (var i = 0; i < oList.length; i++) {
    oList[i].myIndex = i;
    oList[i].onclick = function () {
        //change(i);//=>应该传递的是当前点击这个LI的索引
        //console.log(i);//=>不管点击哪一个输出的都是3(循环结束后i的值)：给元素绑定的方法，都是在用户点击的时候才执行，而用户点击的时候页面肯定加载完了（说明循环也结束了），点击的时候用到的i就是循环结束的i，也就是3
        change(this.myIndex);
    }
}