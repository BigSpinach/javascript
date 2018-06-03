var n = 10;
var obj = {
    n: 20,
    fn: (function () {
        //->上级作用域：全局作用域
        var n = 30;
        return function () {
            //->上级作用域：自执行函数
            console.log(n);
        }
    })()
};
obj.fn();//=>30