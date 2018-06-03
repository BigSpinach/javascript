//1.构造函数
{
	function Foo(){
		this.name="BigSpinach";
		this.age= 26;
		console.log(this);//Foo { name: 'BigSpinach', age: 26 }
		
	}
	
	let f1 = new Foo();
	
}

{
	function Foo(){
		this.name="BigSpinach";
		this.age= 26;
		//console.log(this);//Window{...}
		
	}
	
	Foo();
	
}

console.log("------------------分隔线---------------------");
//2.函数作为对象的一个属性
//如果函数作为对象的一个属性时，并且作为对象的一个属性被调用时，函数中的this指向该对象。
{
	let obj ={
		a:10,
		fn:function(){
			console.log(this);//{ a: 10, fn: [Function: fn] }
			console.log(this.a);//10
		}
	}
	
	obj.fn();
}
//注意，如果fn函数不作为obj的一个属性被调用，this指向window
//如果fn函数被赋值到了另一个变量中，并没有作为obj的一个属性被调用，那么this的值就是window，this.x为undefined。
{
	
	let obj ={
		a:10,
		fn:function(){
			//console.log(this);//Window{...}
			console.log(this.a);//undefined
		}
	}
	
	let f1 = obj.fn;//fn函数被赋值到一个变量中...
	f1();
}




console.log("------------------分隔线---------------------");
//3.函数用call和apply调用
//如果函数被call或者apply调用时，this的值就是取传入的对象的值
{
	let obj = {
		age:26,
		name: "刘凯"
	}
	
	fn=function(){
		console.log(this);//{ age: 26, name: '刘凯' }
		console.log(this.name);//刘凯
	}
	
	//call---apply
	//函数.call(对象)
	fn.call(obj);
	
}
