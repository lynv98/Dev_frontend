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

