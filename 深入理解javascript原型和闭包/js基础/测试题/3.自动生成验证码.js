/*
	 随机摇号功能 ：  
	 1、车牌号开始必须是： 京A、京C、京E、京F、京G、京B、京O 
	 2、车牌号是五位，分别由 26个大写字母 和 0~9十个数字 组成   
	 3、当用户点击页面上的摇号按钮，你编写的程序给用户随机生成一个车牌 号，用户感觉不满意，还可以重新摇号，但是最多只能摇三次
 
*/

{
	function shackNumber(index) { //摇号函数
		//let index = 0; //摇号的次数

		//数组
		let str = '京A、京C、京E、京F、京G、京B、京O';

		let startArr = str.split("、");
		let endArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

		if(index > 3) {
			alert("还摇个锤子，都摇了3次了");
			return;
		} else {
			let startStr = startArr[randomNumber(0, startArr.length - 1)];
			//console.log(startStr);
			let endStr = '';
			for(let i = 0; i < 5; i++) {
				endStr += endArr[randomNumber(0, endArr.length - 1)];
			}
			let nice =  (startStr += endStr);
			alert("您第"+index+"次摇的号码是"+nice);
			return nice;

			//			for(){
			//				if(endStr.length<5){
			//					endStr+=endArr[randomNumber(endArr.length,1)];	
			//				}else{
			//					return endStr;
			//				}
			//				
			//			};
			//console.log(endStr);

		}

	

	};

	//随机数函数
	function randomNumber(start, end) {
		return Math.round(Math.random() * (end - start) + start);
	};

	//console.log(shackNumber());//京BKD30Z

	//在指定位置显示
	window.onload = function() {

		let btn = document.getElementById("shakeBtn");
		//alert(btn.nodeName);
		let index = 0;
		btn.onclick = function() {
			index++;
			//let str = shackNumber(index);
			document.getElementById("licensePlate").innerHTML = shackNumber(index);
		}
	}
	//	document.getElementById("#shakeBtn").onclick=function(){
	//		let str = shackNumber();
	//		
	//		document.getElementById("#licensePlate").innerHTML=str;
	//	}

}