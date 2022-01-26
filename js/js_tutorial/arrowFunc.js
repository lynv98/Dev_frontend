// normal function
function hello(name, message) {
    console.log("chào" + name + "bạn là" + message);
}
hello('nam','brid');
//arrow func
var hello1 = (name, messeage) => {
    console.log("chào" + name + "bạn là" + messeage);
}
hello1('nam','brid');

var blog = {
        domain : "freetuts.net",
        showWebsite : function (callbackFunction){
            callbackFunction();
        },
        render : function(){
            this.showWebsite(function (){
               console.log(this.domain); // this chính là blog
            }.bind(this)); // phải sử dụng hàm bind thì đối tượng this mới chính là blog
        }
    };
     
    blog.render();