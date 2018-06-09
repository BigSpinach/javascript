/*{
	setTimeout(function() {
		console.log('setTimeout');
	});

	new Promise(function(resolve) {
		console.log('promise');
	}).then(function() {
		console.log('then');
	});

	console.log('console');
}*/

/*{
	{
		console.log('1');

		setTimeout(function() {
			console.log('2');
			process.nextTick(function() {
				console.log('3');
			})
			new Promise(function(resolve) {
				console.log('4');
				resolve();
			}).then(function() {
				console.log('5')
			})
		})
		process.nextTick(function() {
			console.log('6');
		})
		new Promise(function(resolve) {
			console.log('7');
			resolve();
		}).then(function() {
			console.log('8')
		})

		setTimeout(function() {
			console.log('9');
			process.nextTick(function() {
				console.log('10');
			})
			new Promise(function(resolve) {
				console.log('11');
				resolve();
			}).then(function() {
				console.log('12')
			})
		})

	}
}
*/
/*
	node环境下的结果是
	//step1：主线程执行，普通语句、new Promise() nextTrick 、 then()
	1、7、6、8 ；
	//step2: 找到宏任务的Event Queue，  依次执行  普通语句、new Promise() nextTrick 、 then()
	2、4、9、11；这是所有的Event Queue的普通语句、new Promise()执行结果，他是Event Queue1执行完后执行Event Queue2 ...依次执行的
	//step3： 执行每一个Event Queue里的nextTrick 
	3、10、     //他是Event Queue1执行完后执行Event Queue2 ...依次执行的
	//step4  :执行每一个Event Queue里的.then
	5、12    // 同理 他也是Event Queue1执行完后执行Event Queue2 ...依次执行的
*/



{
		console.log('1');

		setTimeout(function() {
			console.log('2');
//			process.nextTick(function() {
//				console.log('3');
//			})
			new Promise(function(resolve) {
				console.log('4');
				resolve();
			}).then(function() {
				console.log('5')
			})
		})
//		process.nextTick(function() {
//			console.log('6');
//		})
		new Promise(function(resolve) {
			console.log('7');
			resolve();
		}).then(function() {
			console.log('8')
		})

		setTimeout(function() {
			console.log('9');
//			process.nextTick(function() {
//				console.log('10');
//			})
			new Promise(function(resolve) {
				console.log('11');
				resolve();
			}).then(function() {
				console.log('12')
			})
		})

	}
/*浏览器的执行结果
第一步：依次执行   普通语句  ， new Promise()   .then() 
//1,7,8,
第二步：依次进入每一个宏任务， 同理依次执行普通语句  ， new Promise()   .then() 
//2,4,5 ,
第三步：，进入下一个宏任务，次执行普通语句  ， new Promise()   .then() 
//9, 11,12
		//1：执行


*/