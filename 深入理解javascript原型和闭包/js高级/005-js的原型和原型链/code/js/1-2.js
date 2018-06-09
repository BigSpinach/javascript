function Fn(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log('my name is ' + this.name);
    }
}
// var f = Fn('冯更更', 91);//=>普通函数执行：形成私有作用域=>形参赋值=>变量提升=>代码执行=>栈内存释放问题 （this:window） 返回的结果是undefined(因为没有写return)

var f = new Fn('王洋', 81);//=>构造函数执行:此时的Fn是一个类,f是它的一个实例
/*
 * 1、new Fn也是先把Fn执行，形成一个新的私有作用域
 * 2、形参赋值
 * 3、变量提升  （构造函数执行也具备普通函数的一面）
 * 4、代码执行前：浏览器会在当前栈内存中创建一个对象数据类型值，而且让作用域中的THIS指向创建的这个对象，而这个对象就是当前类的一个实例(构造函数执行形成的栈内存中THIS是当前类的实例)
 * 5、代码自上而下执行：如果遇到了this.xxx=xxx相当于给当前类的实例增加一些私有的属性
 * 6、即时我们不写return,浏览器也会默认把创建的实例返回（如果我们自己写了return：返回的是基本类型值对返回的实例不影响，如果返回的是引用类型值，会把默认返回的实例替换掉）
 */

var f2 = new Fn('张昊', 16);
f2.say();//=>this:f2  f2.name







