if (true) {
	a = 10;
    function a() {
        console.log("a");
    };
}
console.log(a);
//a();//a is not a function

//第一步：全局下声明一个a   window.a = undefined
//第二步：判断函数判断题部分是否有变量，（有，变量提升，没有，继续执行）
//没有就 给a=10,也就是全局下的a=10,后边又定义了一个a()方法，它是一个地址值

/*
 不管条件是否成立 ，都会先进行变量提升
 a
 * */