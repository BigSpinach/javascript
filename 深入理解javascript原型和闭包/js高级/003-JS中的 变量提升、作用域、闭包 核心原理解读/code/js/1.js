var i = 0;
function fn() {
    i += 2;
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(3);
f(4);
fn(5)(6);
f(7);
fn(8)(9);