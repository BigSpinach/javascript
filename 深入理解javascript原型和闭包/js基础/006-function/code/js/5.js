function sum() {
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var cur = Number(arguments[i]);
        !isNaN(cur) ? total += cur : null;
    }
    return total;//=>RETURN后面跟着的都是值（返回的都是值）：此处不是把TOTAL变量返回，而是把TOTAL存储的值返回而已 <=> RETURN 60;
    //return 1+1; //<=> RETURN 2;
}
console.log(sum(10, 20, 30));
//=>sum：代表的是函数本身
//=>sum()：让函数先执行,代表的是当前函数返回的结果(RETURN 后面是啥,相当于函数返回的是啥)


//console.log(total);//=>Uncaught ReferenceError: total is not defined  闭包的保护机制导致私有作用域会保护里面的私有变量