{
	
	//全局环境下，this=>window 
	console.log(this===window);//true
	
	//普通函数在调用时，thi=>window
	
	var a ="我是全局的a"
	var fn =function(){
		console.log(this);
		console.log(this.a);
	}
	fn();//window ,我是全局的a	
}

{
	console.log('----------特殊情况111111------------');
	var obj ={
		x:'我是obj的私有变量x',
		fn:function(){
				console.log(this);
			
			function f(){
				console.log(this);
				console.log(this.x);
			}
			f();
		}
	}
	
	obj.fn();//obj{} , window undefined
	
	/*
	  分析：1.变量提升  全局上下文环境   obj=地址AAA111，
	  	 2.obj.fn()执行fn()函数  ,fn()=>地址BBB222
	  	 3.f()压栈，执行f()   f
	*/
}

{
	console.log('----------特殊情况222222-----------');
	var obj ={
		x:'我是obj的私有变量x',
		fn:function(){
				console.log(this);
			
			function f(){
				console.log(this);
				console.log(this.x);
			}
			f();
		}
	}
	
	let a = obj.fn;
	a();//window,window,undefined
	
	
	/*
	  分析：
	*/
}

