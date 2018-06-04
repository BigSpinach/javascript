var ary = [1, 2, 2, 2, 3, 2, 1, 2, 3, 2, 2, 3, 4, 3, 2, 2, 3];

for (var i = 0; i < ary.length - 1; i++) {
    var cur = ary[i];
    for (var j = i + 1; j < ary.length; j++) {
        if (cur === ary[j]) {
            ary.splice(j, 1);
            //=>数组塌陷问题：我们使用splice删除数组中的某一项后,删除这一项后面的每一项索引都要向前进一位(在原有索引上减一)，此时如果我们j++，循环操作的值累加了，我们通过最新j获取的元素不是紧挨删除这一项的元素，而是跳过一项获取的元素
            j--;//=>先让j--，然后再j++，相当于没加没减，此时j还是原有索引，再获取的时候就是删除这一项后面紧挨着的这一项
        }
    }
}

for (var i = 0; i < ary.length - 1; i++) {
    var cur = ary[i];
    for (var j = i + 1; j < ary.length;) {
        // if (cur === ary[j]) {
        //     ary.splice(j, 1);
        // } else {
        //     j++;
        // }
        cur === ary[j] ? ary.splice(j, 1) : j++;
    }
}
console.log(ary);

/*
 [1, 2, 2, 2, 3, 2, 1(6), 2(7), 3(8), 2, 2, 3, 4, 3, 2, 2, 3]
 j=6  1 删除这一项
 [1, 2, 2, 2, 3, 2, 2(6), 3(7), 2, 2, 3, 4, 3, 2, 2, 3]
 j++ j=7 3*/


