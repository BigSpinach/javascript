/*
	continue：结束当前本轮循环，继续执行下一轮循环
	break：结束整个循环
*/
console.log("--------------continue：结束当前本轮循环，继续执行下一轮循环---------------------")
{
	for(var i=0;i<5;i++){
		continue;//结束本路循环，进行下一次，continue下边的代码不执行
		i=250;
	}
	console.log(i);//5
	
}


console.log("--------------break：结束整个循环---------------------")
{
	for(var i=0;i<5;i++){
		break;//结束本路循环，进行下一次，continue下边的代码不执行
		i=250;
	}
	console.log(i);//0
}

console.log("--------------腾讯面试题---------------------")

{
	for(var i=0;i<10;i+=2){
		if(i<=5){
			i++;
			continue;
		}else{
			i--;
			break;
		}
		console.log(i);不会被执行
		
	}
	console.log(i);//5
	
//	for循环体内修改的i变量,i变量是定义在 for循环作用域的,所以最后的修改是修改的for循环里的i的值,so,最后的输出是5
/*
 	       i=0，
 			走i<=5 ,然后i++  ,i变为1,遇到continue，跳出当前的循环，
 			然后走外层for循环，i+=2 ,所以就是  i=1+2=3
 		   i=3
 		   	走i<=5 ,然后i++  ,i变为4,遇到continue，跳出当前的循环，
 			然后走外层for循环，i+=2 ,所以就是  i=4+2=6
 		   i=6
 		          走else ,然后i--  ,i变为5,遇到break，跳出for的循环，
 			下边的代码就不执行了。。。。
 			
 * */

}
