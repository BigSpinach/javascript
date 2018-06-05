//=>变量提升：没有
f = function () {return "f";};
g = function () {return "g";};
~function () {
    //=>[私有作用域]
    //变量提升：g=undefined (不管条件是否成立都要进行变量提升，但是新版本的浏览器只对函数进行声明)
    //if (g() && [] == ![]) {//=>Uncaught TypeError: g is not a function
    if ( [] == ![]) {//true
    	
        f = function () {return false;};
        function g() {return true;}
    }
}();
console.log(f());
console.log(g());

/*
	分析 ：1变量提升  ---没有
	     2.自执行函数内：变量提升     g()=>地址xxx
	     3.代码自生而下执行： f =function (){...} //修改了全局的f函数
	     4.自执行函数执行完毕
	     
	     5.代码自生而下执行 ：log(f());-------被修改的f()值
	     6.log(g()); -----全局的g()
*/