
	var num = 20;
	var obj = {
		num: 30,
		fn: (function(num) {
			this.num *= 3;
			num += 15;
			var num = 45;
			return function() {
				this.num *= 4;
				num += 20;
				console.log(num);
			}
		})(num)
	};

	var fn = obj.fn;
	fn();
	obj.fn();
	console.log(num, obj.num);
	//console.log(window.num, obj.num);==console.log(num, obj.num)

