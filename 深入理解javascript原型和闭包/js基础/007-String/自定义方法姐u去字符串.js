{
	function queryUrl(url) {
		let obj = {};
		
		
		//1.操作字符串
		let startIndex = url.indexOf('?');
		//console.log(startIndex);
		if(startIndex==-1){
			
			return obj;
		}
		
		let sliceUrl = url.slice(startIndex + 1, url.length);
		//console.log(sliceUrl);

		//2.字符串切割成数组
		let arr = sliceUrl.split('&');
		//console.log(arr);

		//3.遍历这个数组，并用{}存储
		
		
		
		for(let i = 0; i < arr.length; i++) {
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
			obj[itemArr[0]] = itemArr[1];

		}
		console.log(obj);
	}

	
	var str = 'https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1';
	queryUrl(str);
	let str2 = 'https://www.baidu.com/s';
	queryUrl(str2);

}