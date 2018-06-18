var xhr = new XMLHttpRequest();
xhr.open('get', '请求数据的地址', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var result = xhr.responseText;
    }
};
xhr.send(null);