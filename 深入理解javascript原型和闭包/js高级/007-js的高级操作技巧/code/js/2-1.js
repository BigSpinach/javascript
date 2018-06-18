var ary = [12, 23, 14, 25, 34, 11, 16];
/*
 * 解决方案一：
 *   先排序
 *   掐头去尾
 */
ary.sort(function (a, b) {
    return a - b;
});
console.log(ary[ary.length - 1]);
console.log(ary[0]);