var num = 10;
if (num < 5) {
    num++;//=>num+=1  =>num=num+1  在自身基础上累加1
} else if (num >= 5 && num <= 15) {
    //=>&&：并且,所有条件都成立整体才成立
    //=>||：或者,只要有一个条件成立整体就成立
    num += 2;
} else {
    num--;
}
console.log(num);//=>12