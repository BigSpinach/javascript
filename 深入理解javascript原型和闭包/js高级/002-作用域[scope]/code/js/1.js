//=>全局变量提升：var x; var y; var z; fn=AAAFFF000;
var x = 10,
    y = 20,
    z = 30;
function fn(x, y) {
    //=>[私有作用域]
    //=>形参赋值：x=10 y=20 (x/y都是私有变量)
    //=>变量提升：var x(忽略的,已经存在x这个名字了)
    console.log(x, y, z);//=>z不是私有变量是全局变量 10 20 30
    var x = 100;//=>私有的x=100
    y = 200;//=>私有的y=200
    z = 300;//=>全局的z=300
    console.log(x, y, z);//=>100 200 300
}
fn(x, y, z);//=>FN执行传递的是实参(实参都是值) fn(10,20,30)
console.log(x, y, z);//=>10 20 300