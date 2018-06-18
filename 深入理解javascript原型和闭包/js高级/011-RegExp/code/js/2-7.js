String.prototype.myTrim = function myTrim() {
    return this.replace(/^\s+|\s+$/g, '');
};


var str = '    珠峰 培训   ';
// console.log(str.trim());
// console.log(str.trimLeft());
// console.log(str.trimRight());
// str = str.replace(/^\s+|\s+$/g, '');
// console.log(str);

console.log(str.myTrim());