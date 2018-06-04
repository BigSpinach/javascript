function sum() {
    var n = 10;
    console.log(n);//=>10
    var total = 1 + 1;
    total *= 20;
    console.log(total.toFixed(2));
}
sum();
//console.log(total);//=>Uncaught ReferenceError: total is not defined

var n = 100;
console.log(n);//=>100