var str = 'my name is {0},i am {1} years old,i can {2}!';
var reg = /\{(\d+)\}/g;
str.replace(reg, function () {
    //=>传递的函数一共被执行三次
    //=>console.log(arguments) 每一次匹配捕获到结果,不仅把这个方法执行了,而且还会把当前捕获的结果当做实参传递给这个函数(ARG)
    /*
     * 第一次执行函数，获取的是ARG类数组
     *  0:'{0}' 本次大正则匹配的结果
     *  1:'0'   本次第一个小分组匹配的结果
     *  2:11    本次大正则匹配结果在字符串中的索引 index
     *  3:'my nam...' 原始字符串 input
     *
     * 和每一次执行exec实现捕获的结果非常类似
     */

    //return xxx;//=>每一次执行函数，函数中RETURN的结果，都相当于把本次大正则匹配的内容替换掉（原始字符串不变）
});