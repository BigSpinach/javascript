{
	/*
		 在当前作用域下，不管条件是否成立都要进行变量提升
	 *   =>带VAR的还是只声明
	 *   =>带FUNCTION的在老版本浏览器渲染机制下，声明和定义都处理，但是为了迎合ES6中的块级作用域，新版浏览器对于函数（在条件判断中的函数），
	 *     不管条件是否成立，都只是先声明，没有定义，类似于VAR
	 
	*/
	//console.log(a); //=>undefined
	if('a' in window) {
		var a = 100;
	}
	console.log(a); //=>100
}
console.log("----------------分割线-------------------");
{
	f = function() {
		return true;
	}; //=>window.f=...（TRUE）
	g = function() {
		return false;
	}; //=>window.g=...（FALSE）
	~ function() {
		/*
		 * 变量提升：
		 *   function g;  //=>g是私有变量
		 */
		//if(g() && [] == ![]) { //=>Uncaught TypeError: g is not a function （此时的g是undefined）
			/*
			 变量提升 g ;//自执行函数的私有作用域 g=undefined
			 * */
		//if(g && [] == ![]) {// 首先判断[]==![],返回true
								//然后undefined && true  返回false
		if(g==undefined){	
			//=>[]==![]：TRUE
			console.log("自执行函数中执行f():"+f());//代码不执行？，，，，因为条件判断为false,后边的执行代码就不会执行了，
			//先执行f(),f是全局的，找全局的f,然后执行，所以是true，后边 对f进行了修改，所以会变成修改后的值
			
			console.log("自执行函数中执行g():"+g());//代码不执行？
			//alert(this);//
			f = function() {//私有变量里没有f,所以修改的是全局的f
				return false;
			}; //=>把全局中的f进行修改 window.f=...（FALSE）
			function g() {////私有变量里有g,所以修改的是当前私有作用域里的g,呃呃呃不对，应该说是给私有变量g赋值
				return true;
			}
		}
	}();
	console.log(f());//true
	console.log(g());//false
}