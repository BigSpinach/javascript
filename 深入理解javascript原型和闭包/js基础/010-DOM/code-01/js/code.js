var codeBox = document.getElementById('codeBox');
//=>获取四位随机验证码
function queryCode() {
    //1、先准备一下获取验证码的取值范围
    //->字符串长度62,索引范围0~61
    var range = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //2、在当前范围中随机获取其中的四个字符,拼在一起就是一个验证码
    //->range[索引]
    //->range.charAt(索引)
    //1)循环四次，获取四个随机的索引（0~61）
    //2)通过获取的随机索引到RANGE字符串找到四个字符
    //3)把每一次找到的字符统一进行拼接,得到四位字符串就是我们需要的验证码
    var result = '';
    for (var i = 1; i <= 4; i++) {
        var ran = Math.round(Math.random() * 61);
        result += range[ran];
    }
    codeBox.innerHTML = result;
}
queryCode();//->加载页面的时候就执行一次,生成一个验证码
codeBox.onclick = queryCode;//->此处不加小括号:点击的时候才执行,绑定的时候不执行