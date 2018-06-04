console.log("------------------数组的改--------------");
{
	//splice(n,m,x)：在原有删除的基础上，用x代替删除的内容
	let arr= [1,,3];
	console.log(arr);//[ 1, <1 empty item>, 3 ]
	console.log(arr[1]);//undefined
	
	let arr_return = arr.splice(0,arr.length,"我是被改的内容",11);
	console.log(arr_return);//[ 1, <1 empty item>, 3 ]
	console.log(arr);//[ '我是被改的内容', 11 ]
	
}

console.log("------------------数组的查--------------");
{
	//slice(index,end);	
	let arr= [1,,3];
	let arr_return = arr.slice(0,1);
	console.log(arr);//[ 1, <1 empty item>, 3
	console.log(arr_return);
}
