{
	var a = 10,
		b = 20,
		x = 30,
		y = 40;

	function fn(x) {
		console.log(x, y, a, b);
		var a = b = x = y = 100;
		a = x + y;
		b = x - y;
		console.log(x, y, a, b);
	}
	fn(x);
	console.log(x, y, a, b);
}