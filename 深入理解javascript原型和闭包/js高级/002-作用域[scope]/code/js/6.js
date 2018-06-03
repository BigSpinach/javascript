// function fn() {
//     var i = 1;
//     return function (n) {
//         console.log(n + i++);
//     }
// }
// var f = fn();
// f(10);//->11
// fn()(10);//->11
// f(20);//->22
// fn()(20);//->21

//--------------------------------
// var i = 1;
// function fn() {
//     return function (n) {
//         console.log(n + i++);
//     }
// }
// var f = fn();
// f(10);
// fn()(10);
// f(20);
// fn()(20);

//----------------------------
// function fn(i) {
//     return function (n) {
//         console.log(n + (++i));
//     }
// }
// var f = fn(10);
// f(20);
// fn(10)(20);
// f(30);
// fn(20)(10);
// f(40);