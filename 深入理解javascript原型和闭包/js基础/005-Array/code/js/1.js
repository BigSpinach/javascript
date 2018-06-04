var obj = {name: '珠峰', age: 8};
var ary = [12, 23, 34];
Array.prototype.aa = 100;

//=>FOR循环操作
for (var i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}

//=>FOR IN循环操作
for (var key in ary) {
    //key:属性名(数组中的属性名是索引)
    console.log(ary[key]);
}

//=>FOR循环只能遍历到数组私有的一些属性，而FOR IN循环可以把一些自定义的公共属性也能遍历到