//=>变量提升：var x; var y; fn=AAAFFF111;
console.log(x, y);//=>undefined*2
var x = 10,
    y = 20;//=>x=10  y=20
function fn() {
    //=>[私有作用域]
    //=>变量提升：var x; (x是私有变量)
    console.log(x, y);//=>undefined 20
    var x = y = 100;//=>x=100(私有)  y=100(全局)
    console.log(x, y);//=>100 100
}
fn();
console.log(x, y);//=>10 100

//---------------
// var x=10,
//     y=20;
// var x=10;
// var y=20;

//----------------
// var x = y = 100;
// var x = 100;
// y = 100;//->此处的Y是不带var的