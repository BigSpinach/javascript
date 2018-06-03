"use strict";
function fn(){
    console.log(this);
}
fn();//->undefined
window.fn();//->window