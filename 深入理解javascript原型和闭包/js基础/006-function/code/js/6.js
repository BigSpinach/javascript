function sum() {
    var total = 0;
    return;
}
console.log(sum());//=>如果函数中没有写RETURN或者RETURN后面啥也没有,默认返回的结果就是undefined

function sum() {
    var total = 0;
    return;
    console.log(total);//=>在函数体中遇到RETURN后,RETURN后面的代码都不在执行了
}
console.log(sum());