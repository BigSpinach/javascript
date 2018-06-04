var num = 10;
// if (num == 10) {
//     num++;
// }

//num==10?num++:; //=>Uncaught SyntaxError: Unexpected token ;

num == 10 ? num++ : null;//=>放undefined也可以(void 0)
num == 10 ? num++ : void 0;