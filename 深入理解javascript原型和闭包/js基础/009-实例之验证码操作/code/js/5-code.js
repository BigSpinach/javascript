var codeBox = document.getElementById('codeBox');

//=>queryCode：获取四位验证码
function queryCode() {
    var result = '',
        areaStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (var i = 0; i < 4; i++) {
        var ran = Math.round(Math.random() * 61),
            char = areaStr[ran];
        result += char;
    }
    codeBox.innerHTML = result;
}

queryCode();
codeBox.onclick = queryCode;

