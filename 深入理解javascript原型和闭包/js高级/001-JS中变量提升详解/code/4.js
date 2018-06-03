/*
 //=>变量提升：var fn;
 console.log(fn);//->undefined
 var fn = function () {

 };
 console.log(fn);//->函数本身*/

/*sum();//=>Uncaught TypeError: sum is not a function
 var sum = function () {

 };

 fn();
 function fn() {

 }*/

var fn = function sum() {
    console.log(sum);//->函数本身
    console.log(1);
    console.log(arguments.callee);
};
//sum();//=>Uncaught ReferenceError: sum is not defined
fn();

