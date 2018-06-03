//=>变量提升：没有
f = function () {return true;};
g = function () {return false;};
~function () {
    //=>[私有作用域]
    //变量提升：g=undefined (不管条件是否成立都要进行变量提升，但是新版本的浏览器只对函数进行声明)
    if (g() && [] == ![]) {//=>Uncaught TypeError: g is not a function
        f = function () {return false;};
        function g() {return true;}
    }
}();
console.log(f());
console.log(g());