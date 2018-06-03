//{
//	//=>变量提升：var a;  <=> window.a=undefined;
//	console.log(a); //->undefined
//	var a = 12; //<=> window.a=12
//	console.log(a); //->12
//	console.log(window.a); //->window['a'] 在“全局作用域”中,我们声明一个变量，相当于给全局对象window增加了一个属性名
//
//}

{
	//console.log(a); //=>Uncaught ReferenceError: a is not defined
	console.log(window.a); //=>undefined
	a = 12; //<=> window.a=12
	console.log(a); //=>12   <=>window.a
	console.log(window.a); //=>12
}