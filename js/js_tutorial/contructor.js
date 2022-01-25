// contructor với func
function persion(name){
    this.name = name;
    this.showName = function(){
        console.log(this.name);
    }
};

let persion1 = new persion('lan');
let persion2 = new persion('minh');
persion1.showName();
persion2.showName();

//2: contructor là một class
class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(`tên ${this.name}, tuổi ${this.age}`);
    }
};

let user1 = new user("lan", 32);
user1.showName();

/// class 
class myClass{
    // hàm khởi tạo
    constructor(...args) {
        this.arg = args[0];
    }
    //các phương thức
    method(){
        //code
    }
}

// ví dụ class sử dụng get và set 
class User {
    constructor(name) {
        // Tự động gọi đến hàm set name
        this.name = name;
    }
 
    get name() {
        return "Tên bạn là " + this._name;
    }
 
    set name(value) {
        if (value.length < 4) {
            alert("Vui lòng nhập tên dài hơn 4 kí tự");
            return;
        }
        this._name = value;
    }
}
 
let user5 = new User("Cường");
console.log(user5.name);// Tên bạn là Cường
 
