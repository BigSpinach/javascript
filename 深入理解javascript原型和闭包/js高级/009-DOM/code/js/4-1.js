//=>JSON不是数据类型，它仅仅是一种数据格式
//=>JSON在真实项目中经常被使用,客户端和服务器端的数据传输,目前大部分项目都是依托JSON格式的数据来传输的

//=>JSON只是一种数据格式：除了格式不一样，其它和正常的数据类型操作都一样
// var obj = {name: "珠峰培训", age: 8};//=>普通格式的对象
// var opp = {"name": "珠峰培训", "age": 8};//=>JSON格式的对象：把属性名用双引号(只能是双引号不能是单引号)包起来的格式叫做JSON格式的数据

//=>项目中客户端和服务器端传输的数据一般都是JSON格式的字符串
// var str = '[{"name":"张三","age":28},{"name":"李四","age":25}]';//=>JSON格式的字符串

//=>JSON格式的对象和字符串之间的相互转换
// console.log(window.JSON);//=>它是一个对象,里面提供了两个方法：parse、stringify

//1、JSON.parse：把字符串(必须是JSON格式的字符串)转换为JSON格式的对象，如果转换的字符串不是JSON格式的，转换的过程中会报错
// var str = '[{"name":"张三","age":28},{"name":"李四","age":25}]';
// var jsonAry = JSON.parse(str);

//=>这个方法在IE6~7中不兼容：不兼容的原因是因为，在IE6~7中，window对象中没有JSON这个对象；那怎么办呢？
//=>在IE6~7中，我们可以使用eval来代替JSON.parse这个方法，实现把字符串转换为对象
// var str = '[{"name":"张三","age":28},{"name":"李四","age":25}]';
// var jsonAry = eval('(' + str + ')');//=>使用EVAL转换的时候，需要手动的给字符串外层加一个小括号，目的是为了防止有些数据不加括号报错
// console.log(jsonAry);

//2、JSON.stringify：把对象转化为JSON格式的字符串
// var ary = [{name: '珠峰培训', age: 8}];
// console.log(JSON.stringify(ary));//=>'[{"name":"珠峰培训","age":8}]'

var ary = [{name: '珠峰培训', age: 8, friend: ['阮一峰', '廖雪峰', '大漠']}];
//var str= ary.toString()
JSON.stringify(ary);


