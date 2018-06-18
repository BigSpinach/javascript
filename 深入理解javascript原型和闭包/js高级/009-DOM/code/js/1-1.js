var ary = [12, 13, 24, 14, 25, 15, 26, 16];
// console.log(Math.max(ary));//=>NaN
//<=> Math.max([12, 13, 24, 14, 25, 15, 26, 16])//=>NaN
//<=> Math.max(12, 13, 24, 14, 25, 15, 26, 16)//=>26
//=>虽然我们传递给MAX方法的是一个数组,但是如果我们能让其也相当于在给MAX方法一个个的传参就好了

// fn.call(obj,12,13,24)
// <=>
// fn.apply(obj,[12,13,24])

// console.log(Math.max.apply(Math, ary));//=>26
// console.log(Math.min.apply(Math, ary));//=>12

// console.log(Math.max(...ary));//=>使用ES6的展开运算符：把ARY中的每一项展开（类似于一个个的传递给方法）