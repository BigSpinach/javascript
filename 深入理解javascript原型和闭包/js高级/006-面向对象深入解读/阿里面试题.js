function Foo() {
	getName = function() {
		console.log(1);
	}; //这个是Foo构造函数的私有属性
	return this;
}
Foo.prototype.getName = function() {
	console.log(3);
};//这是Foo构造函数原型上的私有属性 

Foo.getName = function() {
	console.log(2);
}; //设置Foo的公有属性

var getName = function() {
	console.log(4);
};//一个全局变量

function getName() {
	console.log(5);
};//一个全局方法

var a = Foo.getName; //undefined

Foo.getName();//执行的是Foo的公有2
getName();//执行的是全局的getName方法4
//console.log(getName);
Foo().getName();//执行的是Foo构造函数的私有方法1
console.log(Foo());
getName();//1
new Foo.getName();//2
new Foo().getName()//3
new new Foo().getName()//3
//new new Foo.getName()
