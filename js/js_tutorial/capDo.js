//demo protected
class Human{
    _name;
    constructor(name){
        this._name = name;
    }
    // get name(){
    //     return this._name;
    // }
    showName(){
        console.log(`protected name ${this._name}`);;
    }
};

let human = new Human('nguyễn lý');
human.showName();
human.name = 'abc';
human.showName();

// private
class Human{
    // Protected
    #name = ""
     
    constructor(name){
        // Lệnh này đúng, vì nó là lớp con 
        // nên được phép truy cập đến thuộc tính private
        this.#name = name;
    }
     
    // Public
    sayHi(){
        // Lệnh này đúng, vì đang truy cập trong lớp
        console.log(`Xin chào, tôi là ${this.#name}`);
    }
}
 
class Student extends Human{
    sayGoodbye(){
        // Lệnh này sai, vì #name là private
        console.log(`${this.#name} tạm biệt mọi người nhé`);
    }
}
 
let cuong = new Student("Cường");
 
 
cuong.sayHi();  // Lệnh này đúng
cuong.#name;    // Lệnh này sai