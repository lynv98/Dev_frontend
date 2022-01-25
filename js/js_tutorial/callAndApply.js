// sử dụng hàm call để gán giá trị khởi tạo

// hàm khởi tạo
function initProduct(name, price){
    this.name = name;
    this. price = price;
}

function food(name, price){
    // khởi tạo
    // this chính là food => 2 thuộc tính name và price
    initProduct.call(this, name, price);1
};

function hat(name, price){
    initProduct.call(this, name, price);
};

var food = new food('cam', 5);
var hat = new hat('mũ', 6);

console.log(food, ' food');
console.log(hat, ' hat');

// dùng call để gọ hàm anonymous
(function(name){
    console.log(name);
}).call(this, 'nguyen van linh');

//dùng call để đổi giá trị của this
function showMe(message){
    this.message = message;
    return this;
};

var blog = showMe.call({"blog": "freetuts"}, 'nguyen van manh');
console.log(blog);
var blog1 = showMe.call(showMe, 'nguyen van manh');
console.log(blog1);

var sayHello = function(name, message){
    console.log(message + name);
};
sayHello.call(sayHello, 'Cường', ' Xin chào ');
sayHello.apply(sayHello, ['Cường', ' Xin chào ']);

