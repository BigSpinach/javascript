{
	//定义字符串
	let url = "https://app.yinxiang.com/Home.action?_sourcePage=73_P75dzPejiMUD9T65RG_YvRLZ-1eYO3fqfqRu0fynRL_1nukNa4gH1t86pc1SP&__fp=OUXuR1BVKiE3yWPvuidLz-TPR6I9Jhx8&hpts=1528097047910&showSwitchService=true&usernameImmutable=false&rememberMe=true&login=&login=%E7%99%BB%E5%BD%95&login=true&username=821133937%40qq.com&hptsh=CXLHQNKxGK1eBrcK8z315XWii0E%3D#n=9706f34c-4379-4f27-8e24-e2f73aa0f218&s=s67&b=acc662a6-6232-48a7-9061-2ce15ea8be1c&ses=4&sh=1&sds=5&";
	
	/*分析：
		1.按照？分割-----name=aa&age=12
		2. name=aa&age=12  然后按照&切割，切割的结果是返回一个数组
		3.[name=aa,age=12  ]    
		4.遍历数组用{}存储
	*/
	
	//1.操作字符串
	let startIndex = url.indexOf('?');
	//console.log(startIndex);
	let sliceUrl= url.slice(startIndex+1,url.length);
	//console.log(sliceUrl);
	
	//2.字符串切割成数组
	let arr = sliceUrl.split('&');
	//console.log(arr);
	
	//3.遍历这个数组，并用{}存储
	let obj={};
	for(let i=0;i<arr.length;i++){
		//获取到数组的每一项，然后按照  = 切割
		let item = arr[i];
		//console.log(item);
		let itemArr = item.split('=');
		//console.log(itemArr);
		
		//得到的全是这样的数组 [a,b] [c,d]...
//		let key = itemArr[0];
//		let value =itemArr[1];
//		obj[key]= value;
		
		//obj.itemArr[0]= obj.itemArr[1];
		obj[itemArr[0]]	=	itemArr[1];
		
	}
	console.log(obj);
}
