/*
	 	“一切都是对象”这句话的重点在于如何去理解“对象”这个概念。
			
		——当然，也不是所有的都是对象，值类型就不是对象。
			
		首先咱们还是先看看javascript中一个常用的函数——typeof()。typeof应该算是咱们的老朋友，还有谁没用过它？
			
		typeof函数输出的一共有几种类型，在此列出：
	*/
function show(x) {
	console.log(typeof(x)); // undefined
	console.log(typeof(10)); // number
	console.log(typeof('abc')); // string
	console.log(typeof(true)); // boolean
	console.log(typeof(function() {})); //function
	console.log(typeof([1, 'a', true])); //object
	console.log(typeof({
		a: 10,
		b: 20
	})); //object
	console.log(typeof(null)); //object
	console.log(typeof(new Number(10))); //object
}
show();

/*
 	以上代码列出了typeof输出的集中类型标识，其中上面的四种（undefined, number, string, boolean）属于简单的值类型，不是对象。剩下的几种情况——函数、数组、对象、null、new Number(10)都是对象。他们都是引用类型。

	判断一个变量是不是对象非常简单。值类型的类型判断用typeof，引用类型的类型判断用instanceof。
 */
var fn = function() {};
console.log(fn instanceof Object); // true