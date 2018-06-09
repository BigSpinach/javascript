~function () {
    var pro = Array.prototype;

    //=>数组去重
    pro.myDistinct = function myDistinct() {
        var obj = {};
        for (var i = 0; i < this.length; i++) {
            var item = this[i];
            if (typeof obj[item] !== 'undefined') {
                this[i] = this[this.length - 1];
                this.length--;
                i--;
                continue;
            }
            obj[item] = item;
        }
        obj = null;
        return this;
    };
}();

/*
 * undefined
 *  1、变量提升：只声明未定义默认值就是undefined
 *  2、严格模式下：没有明确的执行主体,THIS就是undefined
 *  3、对象没有这个属性名，属性值是undefined
 *  4、函数定义形参不传值，默认就是undefined
 *  5、函数没有返回值(没有RETURN或者RETURN;)，默认返回的就是undefined
 *  ...
 *
 * null
 *  1、手动设置变量的值或者对象某一个属性值为null(此时不赋值，后边会赋值)
 *  2、在JS的DOM元素获取中，如果没有获取到指定的元素对象，结果一般都是null
 *  3、Object.prototype.__proto__的值也是null
 *  4、正则捕获的时候，如果没有捕获到结果，默认也是null
 *  ...
 */