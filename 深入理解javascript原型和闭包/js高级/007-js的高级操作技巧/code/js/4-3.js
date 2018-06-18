//=>utils：属于一个项目的公共方法库，在这里存放了常用到的一些方法
var utils = (function () {
    //=>把类数组转换为数组(兼容所有浏览器的)
    function toArray(classAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(classAry);
        } catch (e) {
            for (var i = 0; i < classAry.length; i++) {
                ary[ary.length] = classAry[i];
            }
        }
        return ary;
    }

    return {
        toArray: toArray
    }
})();

