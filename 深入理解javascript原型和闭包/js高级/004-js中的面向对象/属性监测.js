{
//	instanceof检测--------用来检测当前实例是否隶属于某个类
	function Fn(age,name){
		let money = 250000000000;
		this.age=age;
		this.name=name;
		
	}
	
	let f1 = new Fn(28,"周润发");
	console.log("f1 instanceof Fn:"+(f1 instanceof Fn));//true
	
}
console.log("--------------------instanceof检测--------用来检测当前实例是否隶属于某个类---------------");

{
	//hasOwnProperty------检测属性（私有的）
	//in-------检测属性（只要有就行，不管共有还是私有）
	//in--用来检测当前这个属性是否隶属于对象（不管是对象私有的还是公有的属性，只要有返回的就是true）
	function Fn(age,name){
		let money = 250000000000;
		this.age=age;
		this.name=name;
		
	}
	let f1 = new Fn(28,"周润发");
	let f2 = new Fn(88,"笑哈哈");
	//new出来的构造函数的对象只能得到共有属性，不能得到私有的，向上边的money就不能new出来
	console.log("‘money’ in f1:"+('money' in f1));//false
	console.log("‘money’ in Fn:"+('money' in Fn));//false
	
	console.log("'name' in f1:"+('name' in f1));//true
	console.log("'hasOwnProperty' in  f1:"+('hasOwnProperty' in f1));//true
	
	//hasOwnProperty是Object这个内置类中提供的属性方法，只要当前对象是Object的一个实例，就可以使用这个方法
	
	console.log("*********************************************")
	console.log("f1.hasOwnProperty('name'):"+(f1.hasOwnProperty('name')));//true
	console.log("f1.hasOwnProperty('money'):"+(f1.hasOwnProperty('money')));//false
	
	console.log("f1.hasOwnProperty('hasOwnProperty'):"+(f1.hasOwnProperty('hasOwnProperty')));//false
}
console.log("-----------------------hasOwnProperty和in---------------")
{
	/*
		检测一个属性是否是当前对象的公有属性
			1、是对象的一个属性 
			2、不是对象的私有属性
	*/
	
	function hasPublicProperty(attr,obj){
		return (attr in obj)&&(obj.hasOwnProperty('attr')===false);
	}
	
	obj={
		name:111,
		age:222,
		sex:"男",
	}
	
	console.log(hasPublicProperty('name',obj));//true
}
console.log("-----------------------判断是否是公有属性---------------")