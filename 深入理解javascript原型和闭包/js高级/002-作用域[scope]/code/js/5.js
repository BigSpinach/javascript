var n = 10;
var obj = {
    n: 20,
    fn: (function (n) {
        return function () {
            console.log(n);
        }
    })(obj.n)//=>Uncaught TypeError: Cannot read property 'n' of undefined
};
obj.fn();