function fun() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    }
}
fun.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a);
    },
    c: function () {
        this.a = 30;
        alert(this.a)
    }
};
var my_fun = new fun();
// my_fun.b();//=>私有的方法B  this:my_fun  my_fun.a =>'0'
// my_fun.c();//=>公有的方法C  this:my_fun  my_fun.a=30(把当前实例私有属性A修改为30) =>'30'

var my_fun2 = new fun;
console.log(my_fun2.a);//0
my_fun2.__proto__.c();//=>this:my_fun2.__proto__   my_fun2.__proto__.a=30(当前实例通过原型链在类的公有属性上增加了一个a:30)
console.log(my_fun2.a);//0
console.log(my_fun.__proto__.a);//30