/*
 function fn() {
 //=>[私有作用域]
 //变量提升：var a; (私有变量)
 console.log(a);//->undefined
 var a = 12;
 console.log(a);//->12
 }
 fn();
 console.log(a);//=>Uncaught ReferenceError: a is not defined 闭包机制:私有作用域保护里面的私有变量不受外界的干扰
 */


/*
function fn() {
    //console.log(a);//->Uncaught ReferenceError: a is not defined
    a = 12;//<=>window.a=12
    console.log(a);//=>12
}
fn();
console.log(a);//=>12
*/

















