var blog = {
    name: 'a',
    showName: function(callbackFunc){
        callbackFunc();
    },
    render: function(){
        this.showName(function(){
            console.log(this);// là đối tượng window
            console.log(this.name);//name này không tồn tại
        })
    }
};

blog.render();

// khắc phục
var blog1 = {
    domain : "freetuts.net",
    author : "Nguyễn Văn Cường",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        var _self = this;// gán lại biến this bằng 1 biến khác
        this.showWebsite(function(){
            console.log(_self); // là đối tượng this
            console.log(_self.domain); // ok
            console.log(_self.author); /// ok
        });
    }
};
 
blog1.render();

// cách 2
var blog3 = {
    domain : "learning.net",
    author : "Nguyễn Văn lý",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite(function(){
            console.log(this); // là đối tượng this
            console.log(this.domain); // ok
            console.log(this.author); /// ok
        }.bind(this));
    }
};
 
blog3.render();