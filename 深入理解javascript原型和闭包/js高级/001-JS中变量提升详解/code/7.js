//=>变量提升：fn=aaafff111 (=aaafff222) (=aaafff333) (=aaafff444)
fn();//->4
function fn() {console.log(1);}
fn();//->4
function fn() {console.log(2);}
fn();//->4
var fn=13;//->fn=13
//fn();//->13() Uncaught TypeError: fn is not a function
function fn() {console.log(3);}
//fn();
function fn() {console.log(4);}
//fn();