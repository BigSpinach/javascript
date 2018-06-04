// var ary = [1, 2, 2, 2, 3, 2, 1, 2, 3, 2, 2, 3, 4, 3, 2, 2, 3];
// var obj = {};
// for (var i = 0; i < ary.length; i++) {
//     var cur = ary[i];
//     if (typeof obj[cur] !== 'undefined') {
//         //=>对象中已经存在该属性：证明当前项是数组中的重复项
//         ary.splice(i, 1);
//         i--;
//         continue;
//     }
//     obj[cur] = cur;//=>obj[1]=1 {1:1} 存储
// }

var ary = [1, 2, 2, 2, 3, 2, 1, 2, 3, 2, 2, 3, 4, 3, 2, 2, 3];
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];
    if (typeof obj[cur] !== 'undefined') {
        //ary.splice(i, 1);//=>使用splice会导致后面的索引向前进一位,如果后面有很多项,消耗的性能很大
        //=>思路:我们把最后一项拿过来替换当前要删除的这一项,然后再把最后一项删除
        ary[i] = ary[ary.length - 1];
        ary.length--;
        i--;
        continue;
    }
    obj[cur] = cur;
}
console.log(ary);
