var n = 10;
function sum() {
    console.log(n);
}
//sum();//=>10

~function () {
    var n = 100;
    sum();//=>SUM的宿主环境是当前自执行函数形成的私有作用域
}();