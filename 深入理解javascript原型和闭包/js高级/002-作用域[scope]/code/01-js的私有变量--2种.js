/*
	JS中的私有变量有且只有两种
		在私有作用域变量提升阶段，声明过的变量（或者函数）
		形参也是私有变量
*/
{
	function fn(a,b){
		var sum =a+b;
		return sum;
	}
	
	var result = fn(1,2);
	console.log(result);
}