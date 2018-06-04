Array.prototype.myUnique = function myUnique() {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (typeof obj[item] !== 'undefined') {
            this[i] = this[this.length - 1];
            this.length--;
            i--;
            continue;
        }
        obj[item] = item;
    }
    obj = null;
    return this;
};

var ary = [12, 23, 13, 23, 12, 12, 12, 13, 23, 2, 31, 14];
console.log(ary.myUnique().sort(function (a, b) {
    return a - b;
}));