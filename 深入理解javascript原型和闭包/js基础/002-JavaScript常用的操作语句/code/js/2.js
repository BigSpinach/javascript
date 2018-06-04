//=>当在判断的操作中,很多条件都是符合的,执行完成第一个符合的条件后,后面的条件不管是否符合都不在处理了
var num = 10;
if (num <= 10) {
    num++;
} else if (num >= 5) {
    num--;
}
console.log(num);//=>11