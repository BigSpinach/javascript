var tabBox = document.getElementById('tabBox'),
    oList = tabBox.getElementsByTagName('li'),
    oDivList = tabBox.getElementsByTagName('div');

function change(index) {
    //->index:存储的是当前点击这个LI的索引（形参变量）

    //->clear all
    for (var i = 0; i < oList.length; i++) {
        oList[i].className = oDivList[i].className = null;
    }

    //->让当前点击的有选中的样式
    oList[index].className = oDivList[index].className = 'select';
}

for (var i = 0; i < oList.length; i++) {
    oList[i].myIndex = i;

    oList[i].onclick = function () {
        //change(i);//->把当前点击这个LI的索引传递进来(i是循环结束后的那个结果:当点击的时候循环已经结束了)
        change(this.myIndex);
    }
}

/*
 * 自定义属性思想：
 *   当我们在某一个阶段需要用到一些信息，但是此时不好获取这些信息，我们可以在之前好获取的时候，把这些后续需要用到的信息存储在元素对象的某一个自定义属性上，以后想用的时候直接在自定义属性上获取这些信息即可
 */