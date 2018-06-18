var ary = [12, 23, 14, 25, 34, 11, 16];
/*
 * 先使用字符串拼接,把需要执行的语句拼接成为字符串,最后EVAL一下即可
 *   真实项目中尽量较少EVAL的使用(防止代码压缩成为一行后,EVAL导致代码结构或者执行混乱)
 */
var max = eval('Math.max(' + ary.toString() + ')'),
    min = eval('Math.min(' + ary.toString() + ')');
console.log(max, min);