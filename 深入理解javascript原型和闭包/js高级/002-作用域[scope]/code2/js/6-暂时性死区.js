/*
var a = 12;
if (true) {
    console.log(a);//=>Uncaught ReferenceError: a is not defined
    let a = 13;//=>基于LET创建变量，会把大部分{}当做一个私有的块级作用域（类似于函数的私有作用域），在这里也是重新检测语法规范，看一下是否是基于新语法创建的变量，如果是按照新语法规范来解析
}
*/
{
	//回归条件判断下的变量提升：不管条件是否成立，首先给变量进行声明
	//代码过程 ：1-  变量提升 声明var a (两次var，只声明一次)
	//2-  代码自上而下执行  a=12
	//		log(a)//12
	//		a=13;
	//		log(a);//13 ---这里修改的是最初声明的那个a
	//if{}结束
	//log(a);//13
	var a = 12;
	if(true) {
		console.log(a); //=>12,作用域链上的a的值
		var a = 13; //=>给父级作用域链里的a赋值
		console.log(a); //13
	}
	console.log(a);
}

/*
// console.log(a);//=>Uncaught ReferenceError: a is not defined
console.log(typeof a);//=>"undefined" 在原有浏览器渲染机制下,基于typeof等逻辑运算符检测一个未被声明过的变量，不会报错，返回UNDEFINED
*/

// console.log(a);//=>Uncaught ReferenceError: a is not defined
//console.log(typeof a);//=>Uncaught ReferenceError: a is not defined
//let a;//=>如果当前变量是基于ES6语法处理，在没有声明这个变量的时候，使用TYPEOF检测会直接报错，不会是UNDEFINED，解决了原有的JS的死区

//var的全局作用域
{
	//console.log(a); //=>Uncaught ReferenceError: a is not defined
	//console.log(typeof a); //=>Uncaught ReferenceError: a is not defined
	console.log(xxx);//undefined
	console.log(typeof xxx);//undefined
	var xxx;

}
//基于let的块级作用域
{
	//console.log(a); //=>Uncaught ReferenceError: a is not defined
	//console.log(typeof a); //=>Uncaught ReferenceError: a is not defined
	
	let xxx;

}