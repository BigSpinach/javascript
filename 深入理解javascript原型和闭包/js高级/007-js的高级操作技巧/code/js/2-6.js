let ary = [12, 23, 14, 25, 34, 11, 16];
//=>利用ES6的展开运算符来实现需求（原理：和APPLY这个一样）
let max = Math.max(...ary),
    min = Math.min(...ary);
console.log(min, max);