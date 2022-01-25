function a(){
    console.log('đây là hàm a');
};

function b(callback){
    //hàm b có tham số callback
    callback();
};

//gọi hàm b và truyền tham số là hàm a
b(a);

// nguyên tắc 123
/// tham số truyền vào là 1 func
function createPassword(callback) {
    if (typeof callback !== 'function'){
        alert('Bạn phải truyền vào là một function');
        return false;
    }
    // do something
}

//object chứa hàm clallback
var doaminInfo = {
    name: 'nguyen van a',
    setname: function(name) {
        //gt này không có tác dụng với key name trong object
        // nếu gọi như 1 callback func
        console.log('test callback');
        this.name = name;
    }
};

//hàm có tham số callback
function callbackfunc(callback){
    callback('le xuân b');
};

//gọi đến hàm và truyền tham số vào
callbackfunc(doaminInfo.setname)
 // lỗi this trong object khi sử dụng call back
 // cách fix lỗi trên
// Trước đây
// callback(var1, var2, ...);
 
// Bây giờ
// callback.apply(callbackObject, [var1, var2, ... ]);
 
//cách sửa
var doaminInfo1 = {
    name: 'doamin_a',
    setname: function(name){
        this.name = name;
        console.log(name, 'đây là tên sau callback');
    }
}

// hàm có tham số callback
function cbFunc(callback, callbackObject){
    var name = 'food.com';
    callback.apply(callbackObject, [name]);
}

// gọi đến hàm truyền tham số callback
cbFunc(doaminInfo1.setname, doaminInfo1 );

// demo multiple callback func
function successCallback() {
    // Do something
}
​
​function successCallback() {
    // Do something
}
​
​function completeCallback() {
    // Do something
}
​
​function errorCallback() {
    // Do something
}
​
$.ajax({
    url     :"https://freetuts.net",
    success :successCallback,
    complete:completeCallback,
    error   :errorCallback
});