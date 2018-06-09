//=>变量提升：在当前作用域形成后，JS代码自上而下执行之前，浏览器首先会把所有带VAR和FUNCTION关键字的进行提前的声明或者定义
//=>声明（declare）：var a / function fn （告诉当前作用域有啥）；只是声明没有赋值的话，默认值是undefined
//=>定义（defined）：a=12 / fn(){...} （给声明的变量赋值）
//=>带VAR的在变量提升阶段只是声明，带FUNCTION声明和定义在变量提升阶段都完成了
/*/!*
 * 变量提升：var a;
 *!/
console.log(a);//=>undefined
var a = 12;//=>此处不需要再重复声明VAR A;只需要给A赋值即可 =>a=12
console.log(a);//=>12*/

//=>案例一：
/*console.log(a, b, c);//=>undefined * 3
var a = 10,
    b = 10,
    c = 10;

function fn(a) {
    console.log(a, b, c);//=>10 undefined 10
    var b = a = c = 100;
    console.log(a, b, c);//=>100 * 3
}

fn(10, 20);
console.log(a, b, c);//=>10 10 100*/


/*
 var a = 10,
    b = 10,
    c = 10;

 =>var a=10;  var b=10;  var c=10;

 var a=b=c=100;
 =>var a=100;  b=100;  c=100; （只有A带VAR声明，其余的都没有）
*/

//=>所有的定义赋值操作都是先准备值，然后再赋值的
/*var n = m = [12, 23];
/!*
 * 1. var n;
 * 2. 准备值(AAAFFF222)
 * 3. n=AAAFFF222
 *    m=AAAFFF222
 *!/*/

/*var n=[12,23];
/!*
 * 1. 声明N
 * 2. 准备值（开辟一个堆内存，存储键值对，有一个16进制地址）
 * 3. 赋值（把16进制地址赋值给N：N=AAAFFF111）
 *!/*/


//=>案例二：
/*
 * 变量提升：
 *    var a;
 *    var b;
 *    fn = aaafff000;
 */

/*
var a = 10,
    b = 10;
function fn(a) {
//  
//   * 形参赋值：a=10
//   * 变量提升：var b;
//   
    //console.log(a, b, c);//=>Uncaught ReferenceError: c is not defined
    a *= 2;//=>a=20
    var b = a;//=>b=20
    b++;//=>b=21
    c = b;//=>给全局作用域中设置一个C
    console.log(a, b, c);//=>20/21/21
}
//a = fn(a);//=>把FN执行，把全局变量A的值作为实参传递给函数的形参，接收函数的返回结果，用结果替换原有全局变量A的值  a=fn(10)
//=> 想要知道函数的返回值，只需要看函数中是否有RETURN，有的话，RETURN是啥返回结果就是啥，没有默认返回UNDEFINED  a=undefined
console.log(a, b, c);//=>undefined/10/21
*/
/*fn(a);
console.log(a, b, c);//=>10 10 21
 
 */


//=>案例三：
var ary = [12, 23];
function fn(ary) {
    console.log(ary);
    ary[0]=34;
    ary=[34];
    ary[0]=45;
    console.log(ary);
}
fn(ary);
console.log(ary);

/*
	1.变量提升
		ary=地址ary
		fn =地址fn
	2.执行fn（ary）
	3.找到 地址fn
		形参赋值 ary = 地址ary
		变量提升  ary = ary新地址  ---[34]
		代码自上而下执行 
			console.log(ary);//输出ary的地址的值  --[12,23]
	    	ary[0]=34;  //改变地址ary的索引为0的值  --[34,23]   **所以全局的ary的值就变了
	   	 	ary=[34];// 给ary的新地址复制   ary=[34]
	    	ary[0]=45;//修改ary新地址的0索引值为ary[0]=45  --新地址ary =[45]
	    	console.log(ary); //输出自己的新ary地址的值   --ary =[45]
	4.fn执行完毕
		执行console.log(ary);
		*这里的ary是地址ary的值，因为在执行fn函数的时候，修改过形参ary(地址ary)的值，所以，输出的就是修改后的值
*/

