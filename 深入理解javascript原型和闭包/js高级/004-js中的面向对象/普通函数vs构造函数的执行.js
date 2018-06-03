//普通函数的执行
/*
 	普通函数执行 
				1、开辟一个新的私有作用域 
				2、形参赋值 
				3、变量提升 
				4、代码自上而下执行（return后面的值就是当前函数返回的结果） 
				5、栈内存释放或者不释放问题
 */
{
	function fn(num) {
		this.num = num;
		//		console.log(this);//this  --window
		let total = null;
		total += num;
		return total;
	}

	let f = fn(250);
	console.log(f); //250
}
console.log("---------------普通函数执行------------"); 
//构造函数的执行
/*
	构造函数执行 
		1、首先和普通函数执行一样，也需要开辟一个新的私有作用域 
		2、在私有作用域中完成类似于普通函数的操作：形参赋值以及变量提升 
		3、在代码自上而下执行之前，构造函数有属于自己比较特殊的操作：浏览器会在当前的作用域中默认创建一个对象数据类型的值，
		      并且会让当前函数中的this指向创建的这个对象
		4、像普通函数一样，代码自上而下执行：this.xxx=xxx这里操作都是在给创建的这个对象增加属性名和属性值 
		5、代码执行完成后，即时函数中没有写return，在构造函数模式中：浏览器会默认的把创建的对象返回到函数的外面
		
		构造函数执行，即具备普通函数执行的一面，也同时具备自己独有的一些操作； 
		在构造函数执行期间，浏览器默认创建的对象（也就是函数体中的this）就是当前这个类的一个实例，浏览器会把默认创建的实例返回，
		所以我们说：new Fn()执行，Fn是一个类，返回的结果是Fn这个类的一个实例
*/
{
	function Fn(num) {
		this.num = num;
	}

	var f = new Fn(10);
	console.log(f); //Fn { num: 10 }

}
console.log("---------------构造函数执行(默认不return)------------"); 
/*
	深入理解构造函数执行的步骤
	当构造函数或者类，执行的时候不需要传递任何的实参值，此时我们是否加小括号就不重要了（不传递实参的情况下，小括号可以省略）

	构造函数执行，同时具备了普通函数执行的一面，也有自己特殊的一面，但是和实例相关的，只有自己特殊的一面才相关
	（也就是 this.xxx=xxx才相当于给当前实例增加的私有属性），函数体中出现的私有变量，和实例都没有直接的关系
	
	通过类创建出来的每一个实例都是单独的个体（单独的堆内存空间），实例和实例之间是不相同并且独立互不影响的
	（市面上部分开发把这种模式叫做单例模式，这种说法是错的，JS中的这种模式叫做构造函数设计模式）
	
	在构造函数体中，通过this.xxx=xxx给实例设置的属性都是当前实例的私有属性
*/
{
	function Fn() {
		var num = 100;
		this.name = 'BigSpinach';
		this.sum = function() {};
	}
	var f1 = new Fn();
	var f2 = new Fn;

	//=>私有变量和实例没关系
	console.log(f1.num); //=>undefined
	console.log(f1.name); //=>'BigSpinach'

	//=>不同实例是不同的空间地址
	console.log(f1 === f2); //=>false
	console.log(f1.sum === f2.sum); //=>false
}
console.log("---------------构造函数执行------------"); 

/*
	 当构造函数体中我们自己手动的设置了RETURN（默认返回的是实例:对象类型值）, RETURN 的是一个基本类型值，对最后返回的实例没有任何的影响，
	 但是如果返回的是引用数据类型的值，会把默认返回的实例替换掉；
 */
{
	function Fn() {
		var num = 100;
		this.name = 'BigSpinach';
		this.sum = function() {};
		
		return num;
	}
	let f = new Fn();
	console.log(f);//Fn { name: 'BigSpinach', sum: [Function] }
}
console.log("---------------构造函数执行（return 基本类型）------------"); 
{
	function Fn() {
		var num = 100;
		this.name = 'BigSpinach';
		this.sum = function() {};
		
		return {name:"刘凯",age:26};
	}
	let f = new Fn();
	console.log(f);//{ name: '刘凯', age: 26 }
}
console.log("---------------构造函数执行（return 引用类型）------------"); 