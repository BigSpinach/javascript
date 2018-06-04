{
	let arr = [1,3,5,4,6,9];
//	let arr1=arr.sort(0);
//	console.log(arr1);
//	console.log(arr);
	
	arr.sort(function(a,b){
		return b-a;
	});
	
	console.log(arr);
}
