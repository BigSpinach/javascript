/*
 * 正则捕获的特点：
 *  1、懒惰性
 *    reg.lastIndex：下一次正则捕获，在字符串中开始中查找的索引
 *
 *    解决懒惰性，需要使用修饰符g，使用修饰符g之后，当前lastIndex值会自动修改（每一次正则捕获完成后，lastIndex值都变为当前捕获内容的下一个索引...）
 */
var reg = /\d+/g,
    str = '珠峰培训2017珠峰培训2018';
console.log(reg.lastIndex);//=>0
console.log(reg.exec(str));//=>['2017'...]

console.log(reg.lastIndex);//=>8
console.log(reg.exec(str));//=>['2018'...]

console.log(reg.lastIndex);//=>16
console.log(reg.exec(str));//=>null

console.log(reg.lastIndex);//=>0
console.log(reg.exec(str));//=>['2017'...]