//=>单词首字母大写
var str = 'my name is zhu-feng-pei-xun,i am 8 years old,i am qian duan pei xun no1!';
//var reg = /\b\w+\b/g; //=>\b代表的是边界：单词左右两边是边界，-的左右两边也是边界，所以这里会把 'zhu-feng-pei-xun' 算作四个单词（我们想把它当做一个）

//=>1、先把混淆边界符的中杠替换为下划线
str = str.replace(/-/g, '_');

//=>2、通过边界符匹配到每一个单词
str = str.replace(/\b(\w)(\w*)\b/g, function () {
    return arguments[1].toUpperCase() + arguments[2];
});

//=>3、在把之前替换的下划线重新赋值为中杠
str = str.replace(/_/g, '-');
console.log(str);