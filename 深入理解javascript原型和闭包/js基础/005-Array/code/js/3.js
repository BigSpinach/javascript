var ary = [1, 2, 2, 2, 3, 2, 1, 2, 3, 2, 2, 3, 4, 3, 2, 2, 3];

//=>ARY.LENGTH-1：最后一项的后面没有内容了,我们不需要再比较
for (var i = 0; i < ary.length - 1; i++) {
    var cur = ary[i];//=>当前遍历的这一项(索引i)

    //=>把拿出的这一项和后面的每一项进行比较
    //->i+1：把当前项和它后面项比较,当前项索引是i,后一项索引是i+1
    for (var j = i + 1; j < ary.length; j++) {
        //ary[j]:作比较的那一项
        if (cur === ary[j]) {
            //=>本次作比较的这一项和当前项相同，我们需要在原有数组中把作比较的这一项删除掉(作比较这一项的索引是j)
            ary.splice(j, 1);
        }
    }
}
console.log(ary);
