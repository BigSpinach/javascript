//=>变量提升：var a;  <=> window.a=undefined;
if(!("a" in window)){//=>条件不成立  "a" in window===true
    var a=1;
}
console.log(a);