{
	var result = 10 + null + [] + undefined + '刘凯' + null + [] + undefined;
	console.log(result); //=> '10undefined刘凯nullundefined'
}
/*
 10+null：数学运算,先把null变为数字0 ->10
 10+[]：数学运算,先把[]变为数字,[].toString()变为'',10+'',变为字符串拼接 ->'10'
 '10'+undefined：字符串拼接 ->'10undefined'
 '10undefined'+'刘凯'：字符串拼接 ->'10undefined刘凯'
 '10undefined刘凯'+null：字符串拼接 ->'10undefined刘凯null'
 ...
 */
console.log("------------------------分隔线--------------------");
{
	var result = 10 + false + true + null + undefined + null + '钟赛' + null + true + undefined; 
	//=> NaN钟赛nulltrueundefined
	console.log(result);
	
	/*//->分析步骤
		10 + false - > 10
		10 + true - > 11
		11 + null - > 11
		11 + undefined - > NaN
		NaN + null - > NaN
		NaN + '钟赛' - > 'NaN钟赛'
		'NaN钟赛' + null - > 'NaN钟赛null'
		'NaN钟赛null' + true - > 'NaN钟赛nulltrue'
		'NaN钟赛nulltrue' + undefined - > 'NaN钟赛nulltrueundefined'
	*/
}

/*
 	总结：
 		I、强转为number
	 		true  =>  1,
	 		false  => 0,
	 		null  =>  0,
 			
 			number + undefined  =>NaN
 		
 * */