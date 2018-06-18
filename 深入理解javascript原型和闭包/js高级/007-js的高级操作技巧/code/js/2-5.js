var ary = [12, 23, 14, 25, 34, 11, 16];
//=>把数组中的每一项一个个的传递给MAX即可
// Math.max(12, 23, 14, 25, 34, 11, 16);

//=>APPLY的特点：虽然编写的是一个数组,但是也相当于在执行函数的时候一项项的传递实参
// fn.call(null,100,200);
// fn.apply(null,[100,200]); <=> fn(100,200)

// Math.max() <=> Math.max.apply(Math)
var max = Math.max.apply(null, ary),
    min = Math.min.apply(null, ary);
console.log(min, max);

