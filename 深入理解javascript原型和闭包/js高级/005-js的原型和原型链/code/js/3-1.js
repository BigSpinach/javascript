//=>全局下的变量提升：var n;  var c;  a=AAAFFF111;
var n=0;
function a(){
    //=>私有作用域：var n; b=BBBFFF111;
    var n=10;//=>n=11 n=12
    function b(){
        //=>私有作用域
        n++;//=>N是其上级作用域的
        console.log(n);
    }
    b();
    return b;//=>return BBBFFF111;
}
var c=a();//=>BBBFFF111
c();
console.log(n);//=>0

