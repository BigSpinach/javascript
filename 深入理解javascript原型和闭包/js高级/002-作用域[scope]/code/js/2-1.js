// console.log(this);

// function fn() {
//     console.log(this);//->this:window
// }
// fn();

// function fn() {
//     function b() {
//         console.log(this);//->this:window
//     }
//     b();
// }
// fn();

// function fn() {
//     console.log(this);//->this:window
// }
// ~function () {
//     fn();
// }();


var obj = {
    name: 'obj',
    fn: function () {
        console.log(this);
    }
};
obj.fn();//->this:obj
var f = obj.fn;
f();//->this:window














