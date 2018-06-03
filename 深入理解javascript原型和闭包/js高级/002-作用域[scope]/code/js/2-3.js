function fn() {
    console.log(this);//this->window
}
document.body.onclick = function () {
    //this->document.body
    fn();
};