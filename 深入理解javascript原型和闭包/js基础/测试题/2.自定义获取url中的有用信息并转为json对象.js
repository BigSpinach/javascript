function myQueryUrl(url){
	let obj={};
	//判断url中是否有  ？
	let startIndex = url.indexOf('?');
	//如果没有，直接输出空{}
	if(startIndex==-1){
		return obj;
	}else{//如果有，切割处理
		
		let str = url.slice(startIndex+1);
		//console.log(str);
		
		//然后按照 & 符号转换成数组
		let arr = str.split("&");
		//console.log(arr);
		
		//遍历arr
		for(let i=0;i<arr.length;i++){
			let item= arr[i];
			//console.log(item);
			//把item按照  =  切割
			let newArr = item.split("="); 
			//console.log(newArr);
			let key = newArr[0];
			let value =newArr[1];
			
			
			obj[key] = value;
			
			
		}
		return obj;
		
		
		
		
	}
	
	
	
	
	
}

let url = "https://app.yinxiang.com/Home.action?_sourcePage=73_P75dzPejiMUD9T65RG_YvRLZ-1eYO3fqfqRu0fynRL_1nukNa4gH1t86pc1SP&__fp=OUXuR1BVKiE3yWPvuidLz-TPR6I9Jhx8&hpts=1528097047910&showSwitchService=true&usernameImmutable=false&rememberMe=true&login=&login=%E7%99%BB%E5%BD%95&login=true&username=821133937%40qq.com&hptsh=CXLHQNKxGK1eBrcK8z315XWii0E%3D#n=9706f34c-4379-4f27-8e24-e2f73aa0f218&s=s67&b=acc662a6-6232-48a7-9061-2ce15ea8be1c&ses=4&sh=1&sds=5&";

console.log(myQueryUrl(url));