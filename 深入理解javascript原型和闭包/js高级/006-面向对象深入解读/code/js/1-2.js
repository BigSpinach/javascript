function fn(i) {
    return function (n) {
        console.log(n + (--i));
    }
}
var f = fn(2);
f(3);
fn(4)(5);
fn(6)(7);
f(8);