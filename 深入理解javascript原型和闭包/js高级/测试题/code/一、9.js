{

	var a = 4;

	function b(x, y, a) {
		console.log(a);
		arguments[2] = 10;
		console.log(a);
	}
	a = b(1, 2, 3);
	console.log(a);
}