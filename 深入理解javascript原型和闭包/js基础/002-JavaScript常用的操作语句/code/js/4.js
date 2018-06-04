var num = 10;
//------------------
// if (num >= 10) {
//     num++;
//     num = num * 10;
// } else {
//     num--;
//     num = num / 10;
// }

//------------------
num >= 10 ? (num++, num = num * 10) : (num--, num = num / 10);
console.log(num);//=>110