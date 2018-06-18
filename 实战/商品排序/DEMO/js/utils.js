var utils = (function(){
	//类数组对象转为数组
	function listToArray(likeArray) {
		let arr = [];
		try {
			arr = [].slice.call(likeArray);
		} catch(e) {

			for(let i = 0; i < likeArray.length; i++) {
				arr[i] = likeArray[i];
			}
		}
		return arr;
	};
	
	//把json格式的数据字符串转为json对象      string=>object
	function jsonParse(str){
		/*
		let val=null;
		try{
			val = JSON.parse(str);
		}catch(e){
			//TODO handle the exception
			val =eval("("+str+")");
		}
		*/
		//优化  判断浏览器是否有JSON属性就可知是不是IE6-7
		return "JSON" in window? JSON.parse(str):eval("("+str+")");
		
		
	}
	
	 return {
        listToArray: listToArray,
        jsonParse:jsonParse,
    }
})();
