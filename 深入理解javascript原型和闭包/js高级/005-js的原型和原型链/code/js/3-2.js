//=>变量提升：var a;  var b; var c; test=AAAFFF111;
var a = 10, b = 11, c = 12;
function test(a) {
    //=>私有作用域:a=10  var b;
    a = 1;//=>私有A=1
    var b = 2;//=>私有B=2
    c = 3;//=>全局C=3
    console.log(a,b,c);
}
test(10);
console.log(a);
console.log(b);
console.log(c);