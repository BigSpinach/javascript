/*
 * 需求：让所有LI中的偶数行背景颜色变为#EEE
 */
//=>1、想要操作哪些元素就先获取这些元素
// getElementById：通过元素的ID来获取到这个元素
// document.getElementById：此处出现的document是获取元素时候的上下文(context)：上下文其实就是获取元素的时候限定的一个范围，这里限定在整个页面中获取需要的元素
// getElementsByTagName：通过标签名来获取到一组元素集合

var hotNewsBox = document.getElementById('hotNews');//->定义一个变量存储我们获取到的这个UL元素
var newsList = hotNewsBox.getElementsByTagName('li');//->在指定上下文(hotNewsBox)中通过标签名把所有的LI获取到,存储在一个变量中

//console.dir(hotNewsBox);
//=>在JS中获取的元素都是对象数据类型的值,我们把他们称之为“元素对象”，每一个元素对象都有很多的属性名和属性值(大部分都是内置的,我们也可以给其自定义增加一些)
//=>className：设置或者存储了当前元素的CLASS样式类
// hotNewsBox.className
// hotNewsBox['className']
// console.log(hotNewsBox.className) 获取当前元素已有的样式类(字符串)
// hotNewsBox.className='AA' 把元素的样式类修改为AA
//=>id：设置或者存储了当前元素的ID值
//=>style：设置或者存储了当前元素的样式（操作的是行内样式，对其它内嵌或者外链的样式无作用）

//console.log(newsList);
//=>JS中获取到的元素集合是一个类数组(类似数组但不是数组)
//1、这个类数组集合是一个对象数据类型的,有一个LENGTH属性存储值代表当前集合中获取元素的个数  newsList.length / newsList['length']
//2、这个集合中的每一项都是存储在数字属性名上面，如果想获取其中一项  newsList[0]第一项 / newsList[4]第五项 ...
// 我们把集合中的数字属性名称之为索引，类数组或者数组的索引都是从零开始的，然后逐级递增

//=>为啥i要从零开始：因为newsList集合的索引就是从零开始的，我们查找的时候也是从索引零开始一个个的查找，i设置为零，那么i每一次循环存储的值相当于我们要查找的那个索引
for (var i = 0; i < newsList.length; i++) {
    // i=0 第一次循环 我要找第一个li newsList[0]
    // i=1 第二次循环 我们找第二个li newsList[1]
    // ...
    // newsList[i] 把i存储的值作为要查找LI的索引，相当于本次循环找到了需要的LI
    var curLi = newsList[i];
    //->如果当前LI的索引是奇数，代表它是偶数行，反之则为奇数行，例如：索引1是奇数，但是代表的第二行是偶数...
    if (i % 2 === 1) {//=>说明i是奇数，代表的是偶数行
        curLi.style.backgroundColor = '#EEE';
    }
}

//=>JS中的运算符：% (模)，取余数
// 1%2 ->1  2%2 ->0













