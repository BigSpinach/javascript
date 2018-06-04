var ary = [1, 2, 2, 2, 3, 2, 1, 2, 3, 2, 2, 3, 4, 3, 2, 2, 3];
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];//=>当前项
    var curNextAry = ary.slice(i + 1);//=>把当前项后面的那些值以一个新数组返回，我们需要比较的就是后面的这些项对应的新数组
    if (curNextAry.indexOf(cur) > -1) {
        //=>后面项组成的数组中包含当前这一项（当前这一项是重复的），我们把当前这一项删除掉即可
        ary.splice(i, 1);
        i--;
    }
}
console.log(ary);

