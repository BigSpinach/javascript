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

//let url = "https://app.yinxiang.com/Home.action?_sourcePage=73_P75dzPejiMUD9T65RG_YvRLZ-1eYO3fqfqRu0fynRL_1nukNa4gH1t86pc1SP&__fp=OUXuR1BVKiE3yWPvuidLz-TPR6I9Jhx8&hpts=1528097047910&showSwitchService=true&usernameImmutable=false&rememberMe=true&login=&login=%E7%99%BB%E5%BD%95&login=true&username=821133937%40qq.com&hptsh=CXLHQNKxGK1eBrcK8z315XWii0E%3D#n=9706f34c-4379-4f27-8e24-e2f73aa0f218&s=s67&b=acc662a6-6232-48a7-9061-2ce15ea8be1c&ses=4&sh=1&sds=5&";
let url = "http://202.110.112.57/wgdcnccdn.inter.qiyi.com/videos/v0/20180606/c4/4c/a30dc18f27dfa6132bd8fe1dcf26d094.f4v?key=02e6e69ca23f0701c3dabd879dee04bdd&dis_k=bbeb790ff8c36f16b4137fc06d1a0376&dis_t=1528293384&src=iqiyi.com&uuid=7b8b65d4-5b17e808-45&rn=1528293380858&qd_tm=1528293380953&qd_tvid=1078238100&qd_vipdyn=0&qd_k=6828f2fd943ec1c1048d9e790e692b33&cross-domain=1&qd_aid=206231501&qd_uid=&qd_stert=0&qypid=1078238100_02020031010000000000&qd_p=7b8b65d4&qd_src=01010031010000000000&qd_index=1&qd_vip=0&qyid=25b1a7a60a4371a0f72548d731796b3f&pv=0.1&qd_vipres=0&range=1461248-22526975&wshc_tag=0&wsts_tag=5b17e833&wsid_tag=7b8b65d4&wsiphost=ipdbm";
console.log(myQueryUrl(url));