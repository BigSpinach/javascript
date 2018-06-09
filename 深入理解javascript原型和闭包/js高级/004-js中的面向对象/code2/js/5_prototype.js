/*
 * 原型（prototype）、原型链（__proto__）
 *
 *  [函数]
 *    普通函数、类（所有的类:内置类、自己创建的类）
 *
 *  [对象]
 *    普通对象、数组、正则、Math、arguments...
 *    实例是对象类型的(除了基本类型的字面量创建的值)
 *    prototype的值也是对象类型的
 *    函数也是对象类型的
 *    ...
 *
 *  1.所有的函数数据类型都天生自带一个属性：prototype（原型），这个属性的值是一个对象，浏览器会默认给它开辟一个堆内存
 *  2.在浏览器给prototype开辟的堆内存中有一个天生自带的属性：constructor，这个属性存储的值是当前函数本身
 *  3.每一个对象都有一个__proto__的属性，这个属性指向当前实例所属类的prototype（如果不能确定它是谁的实例，都是Object的实例）
 */

function Fn() {
    var n = 100;
    this.AA = function () {
        console.log(`AA[私]`);
    };
    this.BB = function () {
        console.log(`BB[私]`);
    };
}

Fn.prototype.AA = function () {
    console.log(`AA[公]`);
};

var f1 = new Fn;
var f2 = new Fn;

//console.log(f1.n);
//console.log(f1.AA());//AA[私],undefined
//f1.AA();
//undefined从何而来？  那是因为console.log(f1.AA());这句话在执行的时候，代码先执行f1.AA()，然后再把执行的结果当成一个变量，再console.log了一遍
var xxx = f1.AA();//AA[私]
console.log(xxx);//undefined
xxx=250;
console.log(xxx);//250



//console.log(f1.__proto__.AA());

