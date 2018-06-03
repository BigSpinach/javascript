var num = 1,
    obj = {
        num: 2,
        fn: (function (num) {
            this.num *= 2;
            num += 2;
            return function () {
                this.num *= 3;
                num++;
                //console.log(this);
                
                console.log(num);
            }
        })(num)//=>把全局下的num存储的值赋值给形参
    };
var fn = obj.fn;
fn();
obj.fn();
console.log(num, obj.num);
