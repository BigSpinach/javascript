var i = 2;
function fn() {
    i += 2;
    return function (n) {
        console.log(n + (--i));
    }
}
var f=fn();
//console.log(f==fn());
f(2);
f(3);

fn()(2);
fn()(3);
f(4);
//console.log(fn()==fn());//false
//因为ruturn 的是一个函数，是一个地址，所以不同

console.log(i);