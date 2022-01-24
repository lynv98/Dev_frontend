//cách 1: sử dụng func
function User() { 
    // kb thuộc tính
    this.username = "";
    this.password = "";
    
    //kb phương thức
    this.setInfo = function(username, password) {
        this.username = username;
        this.password = password;
    };

    this.checkLogin = function(){
        return (this.username === "admin", this.password === "123@")
    };
    //phải return this thì mới tạo được đối tượng mới
    return this; 
}

/// cách sử dụng

var user = new User();
user.setInfo('admin', '123@');
if(user.checkLogin()){
    console.log('login success');
}else{
    console.log('login false');
}

/// sử dụng prototype để bổ sung thêm phương thức cho đối tượng
function Human(){
    this.name = '';
    this.age = null;

    return this;
}

Human.prototype.setInfo = function(name, age){
    this.name = name;
    this.age = age;
};

Human.prototype.checkInfo = function(){
    return (this.name === 'nguyen van ly', this.age === 24)
}

/// cách sử dụng
var human = new Human();
human.setInfo('nguyen van ly', 24);
if(human.checkInfo){
    console.log('succsess full');
}else{
    console.log('false');
}
// cách 2: sử dụng object
var cat = {
    // kb thuộc tính
    name: "",
    height: 0,
    weight: 0,
    // kb phương thức
    setInfo: function(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    },
    checkInfo: function(){
        return (this.name === "kiki" && this.height === 30 && this.weight === 2);
    }
};

// cách sử dụng
cat.setInfo("kiki", 30, 5);
if(cat.checkInfo()){
    console.log('chính xác');
}else{
    console.log('không phải mèo nhà');
}
