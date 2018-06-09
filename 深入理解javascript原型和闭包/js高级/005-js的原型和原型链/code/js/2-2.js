function Fn(name, age) {
    this.name = name;
    this.age = age;
}
/*==设置别名(小名)==*/
// var pro = Fn.prototype;//=>指向同一个堆内存
// pro.aa = function () {
//
// };
// pro.bb = function () {
//
// };

/*==重新构造原型==*/
Fn.prototype.cc = function () {

};
Fn.prototype = {
    //=>让原型指向自己开辟的堆内存有一个问题：自己开辟的堆内存中没有constructor这个属性，所以实例在调取constructor的时候找到的是Object，这样不好，此时我们应该重新设置一下constructor，保证机制的完整性
    constructor: Fn,
    aa: function () {

    },
    bb: function () {

    }
};

var f = new Fn('xxx', 28);
//f.cc=>undefined：重新做原型指向后，之前在浏览器默认开辟的堆内存中存储的属性和方法都没用了,只有在新内存中存储的才是有用的

// Array.prototype.aa = 11;
// Array.prototype={};//=>内置类原型不允许我们进行重构


~function () {
    var jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function (selector, context) {

        }
    };
    window.$ = window.jQuery = jQuery;
}();















