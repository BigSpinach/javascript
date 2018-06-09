// var fullName = 'language';
// var obj = {
//     fullName: 'javascript',
//     prop: {
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());//=>this:obj.prop  =>obj.prop.fullName =>undefined
// var test = obj.prop.getFullName;
// console.log(test());//=>this:window =>window.fullName =>'language'

var name = 'window';
var Tom = {
    name: "Tom",
    show: function () {
        console.log(this.name);
    },
    wait: function () {
        var fun = this.show;
        fun();
    }
};
Tom.wait();//=>this:Tom =>fun=Tom.show =>fun() =>this:window =>window.name =>'window'


















