var num = 5;
switch (num) {
    case 0:
        num++;
        break;
    case 5:
    case 10:
        num *= num; //=>只要当前的NUM等于5或者等10都去做同样的事情
        break;
    default:
        num = 0;
}
console.log(num);