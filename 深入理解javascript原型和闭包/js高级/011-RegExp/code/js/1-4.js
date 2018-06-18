RegExp.prototype.myExecAll = function myExecAll() {
    var str = arguments[0] || '',
        result = [];
    //=>首先判断THIS是否加了全局修饰符G,如果没有加,为了防止下面执行出现死循环,我们只让其执行一次EXEC即可,把执行一次的结果直接的返回
    if (!this.global) {
        return this.exec(str);
    }
    var ary = this.exec(str);
    while (ary) {
        result.push(ary[0]);
        ary = this.exec(str);
    }
    return result;
};

var reg = /\d+/g;
console.log(reg.myExecAll('珠峰2017培训2018杨帆2019起航2020'));