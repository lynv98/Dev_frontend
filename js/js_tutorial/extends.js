// khoi tao lop
class Animal{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    run() {
        console.log(`chay toc do la ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} dung yen`);
    }
};

// khoi tao lop ke thua
class Lion extends Animal {
    roar(){
        console.log(`${this.name} dang gam`);
    }
};

let lion = new Lion("su tu");
lion.run(30);
lion.stop();

// overriding in js
class Rabbit extends Animal{
    run(){
        super.run();
        this.hide();
    }

    hide(){
        console.log(`${this.name} đang ẩn nấp`);
    }
};

let rabbit = new Rabbit("thỏ con");
rabbit.run();

class Mouse extends Animal{
    constructor(name, speed, weight){
        super(name, speed);
        this.weight = weight;
    }

    myName() {
        // this.name = name;
        console.log("ten con vat la", this.name);
    }

    weights(){
        console.log(`can nang la ${this.weight}`);
    }
}

var mouse = new Mouse('chuột con', 20, 39);
mouse.myName();
mouse.run(30);
mouse.weights();
