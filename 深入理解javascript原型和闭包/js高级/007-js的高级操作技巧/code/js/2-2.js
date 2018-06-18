var ary = [12, 23, 14, 25, 34, 11, 16];
/*
 * 假设法：先假设一个值，然后再去验证真假即可
 *   先假设第一个是最大值,然后循环数组中的每一项,和假设值进行比较,如果当前遍历的这一项比假设的值大,我们替换假设的值即可
 */
var max = ary[0],
    min = ary[0];
for (var i = 1; i < ary.length; i++) {
    var item = ary[i];
    item > max ? max = item : null;
    item < min ? min = item : null;
}
console.log(max, min);
