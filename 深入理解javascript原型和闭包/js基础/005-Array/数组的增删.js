console.log("-----------------------------数组的增，四种方式----------------------");
{
	//增--方式1 push(a,b,...)
	let arr = [1, 2, 3];

	let arr1 = arr.push(250, '急急急');
	//console.log(arr1); //5  在末尾增，返回数组的长度
	console.log(arr); // [ 1, 2, 3, 250 ]原数组的值变了

	/*
		 * 1、push：向数组的末尾追加新内容
		 *   参数：一到多个，任何数据类型都可以，想要给数组末尾追加什么，直接传递到push方法中即可，传递多个用逗号隔开
		 *   返回值：新增后数组的长度
		 *   原有数组改变了
	 */

}

{
	//增--方式2 unshift(a,b,...)
	let arr = [1, 2, 3];

	let arr1 = arr.unshift(250);
	//console.log(arr1); //  4  在末尾增，返回数组的长度
	console.log(arr); //[ 250, 1, 2, 3 ] 原数组的值变了

}

{
	//增--方式3 arr[arr.length] = xxx;
	let arr = [1, 2, 3];

	arr[arr.length] = "新增的250"

	console.log(arr); //[ 1, 2, 3, '新增的250' ] 原数组的值变了

}
{
	//增--方式4 splice(start,end,xxx)
	let arr = [1, 2, 3];

	//let arr1 = arr.splice(0,0,'splice(index,endindex,x)');
	//[ 'splice(index,endindex,x)', 1, 2, 3 ] 原数组的值变了
	
	let arr1 = arr.splice(arr.length,0,'splice(index,endindex,x)');//[ 1, 2, 3, 'splice(index,endindex,x)' ]
	//arr[arr.length] = "新增的250"
	
	console.log(arr1);//[] 返回一个空数组
	console.log(arr); //[ 'splice(index,endindex,x)', 1, 2, 3 ] 原数组的值变了
	
}


console.log("-----------------------------数组的删，5种方式---------------");
{
	//方式1  pop()删除最后一项
	let arr = [1, 2, 3];
	let arr_return = arr.pop();
	
	console.log(arr_return);//3 --返回的是被删除的那一项的值
	console.log(arr);//[ 1, 2 ]
}

{
	//方式2  shift()  删除第一项
	let arr = [1, 2, 3];
	let arr_return = arr.shift();
	
	console.log(arr_return);//1 --返回的是被删除的那一项的值
	console.log(arr);//[ 2, 3 ]
}

{
	//方式3  `delete ary[索引]
	//删除指定索引这一项(当前项被删除后，原有数组其它项的索引不会改变；当前数组的length也不会改变
	let arr = [1, 2, 3];
	delete arr[1];

	console.log(arr);//[ 1, <1 empty item>, 3 ]
	console.log(arr.length);//3 长度不变
}

{
	//方式4  splice(start,end)  
	let arr = [1, 2, 3,4,5,6];
	let arr_return = arr.splice(0,1);
	
	console.log(arr_return);//[ 1 ] --返回的是被删除的数组
	console.log(arr);//[ 2, 3, 4, 5, 6 ]
}

{
	//方式5  arr.legth--  
	let arr = [1, 2, 3,4,5,6];
	
	arr.length--;// 删除数组最后一项
	console.log(arr);//[ 1,2, 3, 4, 5 ]
}