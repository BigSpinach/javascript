/*
 * 变量提升：
 *   function fn;
 */
// console.log(fn);//=>undefined
if (1 === 1) {
    console.log("小行星");//
    console.log(fn);//=>函数本身：当条件成立，进入到判断体中（在ES6中它是一个块级作用域）第一件事并不是代码执行，
    				//而是类似于变量提升一样，先把FN声明和定义了，也就是判断体中代码执行之前，FN就已经赋值了
    function fn() {
        console.log('ok');
        console.log(this);
    }
}
 console.log(fn);//=>函数本身
 console.log("---");
 //console.log(fn());//=>函数本身
 
 //console.log(this.fn);//=>window.fn
 //console.log(this);//=>window
 console.log(window.fn());//=>ok  window{} undefined
 						  //为什么多了个undefined   ，代码显示执行的是console.log(fn)   ==难不成是变量提升+赋值
 			//window.fn(),在window环境下 创建window的上下文环境，
 			//然后，引入fn()函数的块级作用域的     上下文环境
 				//然后执行fn的块级作用域中的fn()函数，
 //fn()的上下文环境		//和以前一样，1变量提升， 有一个function fn(){...},fn()指向地址XXAAFF00-----新的地址
 					//然后执行fn()函数  log('OK')
 					//    			log(this)---window
 				
 				//执行完fn()后需要释放掉 
 				//然后准备释放fn()的上下文环境，发现fn被引用----console.log(fn)
 								//这里的fn就是上边创建的地址 XXXAAAFF00
 								//所以log(fn)一下， 结果是undefined
 							//so fn()的上下文环境被释放了
 						//至于为什么没有再执行  log("小行星")；--我想应该大概是因为执行完fn()的引用,完全释放了fn()的上下文环境，so...不执行
 						
 			
 
 
 



