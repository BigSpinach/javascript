"use strict";
//=>一、获取数据,然后动态展示在页面中
~function () {
    //->获取数据
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText;//=>JSON格式的字符串
            window.result = utils.toJSON(result);
        }
    };
    xhr.send(null);

    //->数据绑定:ES6中的模板字符串(原理:传统的字符串拼接)
    var listBox = document.getElementById('list');
    var str = ``;//=>这不是单引号而是撇
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        str += `<li><a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>￥${item.price}</span>
        </a></li>`;
    }
    listBox.innerHTML = str;
}();

