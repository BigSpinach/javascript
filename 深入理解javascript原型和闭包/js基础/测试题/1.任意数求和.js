//补充代码实现最后的效果（任意数求和）
function sum() { //=>在这里实现你的代码
	let arg = arguments;
	let total=0;
	//console.log(arg);
	for(let i=0;i<arg.length;i++){
		let num = Number(arg[i]);
		console.log(num);
//		if(typeof num=='number'){
//			total+=num;
//		}else{
//			total+=0;
//		}
		if(!isNaN(num)){
			total+=num;
		}
	}
	return total;
	

}






var total = sum(10,20,'30','BigSpinach','40');
console.log(total); //=>100