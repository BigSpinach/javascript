//创建一个ajax对象
var xhr = new XMLHttpRequest();
//=>打开请求的URL
//[HTTP METHOD]：HTTP请求方式 GET POST PUT DELETE HEAD...
//[URL]：请求数据的地址
//[ASYNC]：设置同步或者异步请求，默认是TRUE异步，我们暂时写FALSE同步
xhr.open('GET', 'data.txt', false);
//=>监听状态改变,完成数据的获取
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var result = xhr.responseText;
        console.log(result);
    }
};
//=>发送AJAX请求
xhr.send(null);
