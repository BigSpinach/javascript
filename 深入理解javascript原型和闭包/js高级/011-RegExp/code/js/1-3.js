RegExp.prototype.myExecAll = function myExecAll() {
    //=>this:当前需要处理的正则
    //=>str:当前需要处理的字符串
    var str = arguments[0] || '',
        result = [];

    var ary = this.exec(str);
    while (ary) {
        //=>ary!== null：还可捕获到内容,我们继续下一次捕获
        result.push(ary[0]);//=>把当前本次捕获到的结果存放在RESULT数组中
        ary = this.exec(str);//=>继续执行下一次的捕获
    }
    return result;
};

var reg = /\d+/g;
console.log(reg.myExecAll('珠峰2017培训2018杨帆2019起航2020'));
//reg.myExecAll('珠峰2017培训2018杨帆2019起航2020');