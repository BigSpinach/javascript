var codeBox = document.getElementById('codeBox');

//=>queryCode：获取四位验证码
function queryCode() {
    var result = '',
        areaStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (var i = 0; i < 4; i++) {
        var ran = Math.round(Math.random() * 61),
            char = areaStr[ran];
        //=>a和A也算重复，该如何处理?
        //result='Ab' 'ab'
        //char='a'    'a'
        //result.toLowerCase().indexOf(char.toLowerCase())===-1
        if (result.toLowerCase().indexOf(char.toLowerCase()) > -1) {
            i--;
            continue;
        }
        result += char;
    }
    codeBox.innerHTML = result;
}

queryCode();
codeBox.onclick = queryCode;

