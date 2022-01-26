//static method
class Human{
    static staticMethod(){
        console.log(this === Human);
    }
}

// không cần phải khởi tạo
Human.staticMethod();
//tương Tự
class User{}
User.staticMethod = function(){
    console.log(this === User);
}
User.staticMethod();

//static property
class Attricle{
    static publicsher = "lý nguyễn"
    change(val){
        this.constructor.publicsher = val;
    }
    show(){
        console.log(this.constructor.publicsher);
    }
}

let atticle = new Attricle();
atticle.show();
atticle.change('lan nguyễn');
atticle.show();

