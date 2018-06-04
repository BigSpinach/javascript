var num = 10;
// if (num == 0) {
//     num++;
// } else if (num == 5) {
//     num--;
// } else if (num == 10) {
//     num = num * num;
// } else {
//     num = 0;
// }

switch (num) {
    case 0:
        num++;
        break;
    case 5:
        num--;
        break;
    case 10:
        num *= num;
        break;
    default:
        num = 0;
}

console.log(num);