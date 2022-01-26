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


