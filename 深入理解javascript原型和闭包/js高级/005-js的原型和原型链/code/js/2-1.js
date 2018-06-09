//=>原型：每一个函数(普通函数&&内置类或者自定义类)都天生自带一个属性[prototype]，属性值也是一个对象[浏览器默认为其开辟一个堆内存]，在它的堆内存中存储的属性和方法都是当前类赋予其实例的公共属性方法
//=>在类原型对应的堆内存中(浏览器默认给他开辟的那个)天生自带一个属性：constructor，这个属性存储的值是当前类本身  Fn.prototype.constructor===Fn
//=>每一个对象数据类型(普通对象&&数组&&正则&&实例&&prototype...)都天生自带一个属性__proto__，这个属性存储的值就是其所属类的原型  f1.__proto__===Fn.prototype

function Fn(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log('my name is ' + this.name);
    }
}
Fn.prototype.say = function () {
    console.log('i am ' + this.age + ' years old');
};
Fn.prototype.eat = function () {
    console.log('i love food');
};
var f1 = new Fn('张学波', 20);
var f2 = new Fn('冀闯', 21);

f1.say();//=>this:f1  查找私有的
f1.__proto__.say();//=>查找的是公有的属性和方法  this:f1.__proto__  'i am ' + f1.__proto__.age (undefined) + ' years old'
Fn.prototype.say();

/*
 * 关于原型链中提供的私有(公有)方法中的THIS指向问题：
 * 1、看点前面是谁，THIS就是谁
 *   f1.say():this->f1
 *   f1.__proto__.say():this->f1.__proto__
 *   Fn.prototype.say():this->Fn.prototype
 *   ...
 *
 * 2、把需要执行方法中的THIS进行替换
 * 3、替换完成后，如果想要知道结果，只需要按照原型链的查找机制去查找即可
 */









