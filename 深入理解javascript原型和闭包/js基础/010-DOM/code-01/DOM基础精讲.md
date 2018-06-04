##DOM基础精讲
> DOM：document object model 文档对象模型，提供一些属性和方法可以让我们去操作DOM元素

###获取DOM元素的方法
- document.getElementById 一个元素对象
- [context].getElementsByTagName 元素集合
- [context].getElementsByClassName 元素集合
- document.getElementsByName 节点集合
- document.documentElement 获取整个HTML对象
- document.body 获取整个BODY对象
- document.head 获取整个HEAD对象
- [context].querySelector 一个元素对象
- [context].querySelectorAll 获取元素集合
- ...

`getElementById`
> 此方法的上下文只能是document
> 一个HTML页面中元素的ID理论上是不能重复的
>  
> 1、如果页面中的ID重复了，我们获取的结果是第一个ID对应的元素对象
>  
> 2、在IE7及更低版本浏览器中，会把表单元素的name值当做id来识别使用（项目中尽量不要让表单的name和其它元素的id相同）
>  
> 3、如果我们把JS放在结构的下面，我们可以直接使用ID值来获取这个元素（不需要通过getElementById获取），而且这种方式会把页面中所有ID是他的元素都获取到（元素对象/元素集合）  =>不推荐

```javascript
//=>获取页面中ID值为#box1的所有元素标签
var allList = document.getElementsByTagName('*'),
    result = [];
for (var i = 0; i < allList.length; i++) {
    var item = allList[i];
    item.id === 'box1' ? result.push(item) : null;
}
console.log(result);
```

`getElementsByTagName`
> 上下文是可以自己来指定
> 获取到的结果是一个元素集合（类数组集合）
>  
> 1、获取的结果是集合，哪怕集合中只有一项，我们想要操作这一项（元素对象），需要先从集合中获取出来，然后再操作

```
<body>
   <div></div>
   <div></div>
   <div></div>
   ...
</body>
<script>
   var bodyBox=document.getElementsByTagName('body');
   bodyBox.getElementsByTagName('div');//->Uncaught TypeError: bodyBox.getElementsByTagName is not a function 此时的bodyBox是一个类数组集合，我们需要使用的是其中的第一项，而不是整个集合
	
	bodyBox[0].getElementsByTagName('div')
</script>
```
> 2、在指定的上下文中，获取所有子子孙孙元素中标签名叫做这个的(后代筛选)
```
<div id='box'>
	<ul>
		<li></li>
		...
	</ul>
	<div>
		<ul><li></li>...</ul>
		<div></div>
		...
	</div>
	...
</div>
<script>
	box.getElementsByTagName('li');
	box.getElementsByTagName('div');
</script>
```

`getElementsByClassName`
> 上下文也可以随意指定
> 获取的结果也是一个元素集合（类数组集合）
>  
> 1、真实项目中我们经常会通过样式类名来获取元素，getElementsByClassName这个方法在IE6~8浏览器中是不兼容的
```javascript
function byClass(strClass, context) {
    context = context || document;
    if (isHighVersion) return [].slice.call(context.getElementsByClassName(strClass));

    strClass = strClass.replace(/^\s+|\s+$/g, '').split(/\s+/g);
    var tagList = context.getElementsByTagName('*'),
        result = [];
    for (var i = 0; i < tagList.length; i++) {
        var item = tagList[i],
            itemClass = item.className;
        var isMatch = true;
        for (var k = 0; k < strClass.length; k++) {
            var reg = new RegExp('(^| +)' + strClass[k] + '( +|$)');
            if (!reg.test(itemClass)) {
                isMatch = false;
                break;
            }
        }
        isMatch ? result.push(item) : null;
    }
    return result;
}
```

`getElementsByName`
> 通过元素的NAME属性值获取一组元素（类数组：节点集合 NodeList）
> 它的上下文也只能是document
>  
> 1、IE浏览器只能识别表单元素的name属性值，所以我们这个方法一般都是用来操作表单元素的

`document.documentElement / document.body`
> 获取HTML或者BODY（一个元素对象）
```javascript
document.documentElement.clientWidth||document.body.clientWidth //=>获取当前浏览器窗口可视区域的宽度（当前页面一屏幕的宽度）

//=>clientHeight是获取高度
```

`querySelector / querySelectorAll`
> 在IE6~8下不兼容，而且也没什么特别好办法处理它的兼容，所以这两个方法一般多用于移动端开发使用
>  
> querySelector：获取一个元素对象
> querySelectorAll：获取的是一个元素集合
> 
> 只要是CSS支持的选择器，这里大部分都支持