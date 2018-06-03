console.log(num);//->undefined
console.log(fn);//->undefined
if (1 !== 1) {
    console.log(num);//=>undefined
    console.log(fn);//=>函数体本身
    var num = 12;
    function fn() {

    }
    console.log(num);//=>12
    console.log(fn);//=>函数体本身
}
console.log(fn);//=>函数体本身

// console.log(fn);//->undefined
// for (var i = 0; i < 1; i++) {
//     function fn() {
//
//     }
// }













