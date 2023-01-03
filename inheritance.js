class Car{
    constructor(name){
        this.name = name;
    }
    drive(){
        console.log("Vroom");
    }
}


class Tesla extends Car{
    constructor(name){
        super(name);
    }
    drive(){
        console.log(`Vroom Vroom ${this.name}`); //getting the value from the parent element
        return super(name);
    }
    get consoleCar(){
        drive();
    }

}


const tesla = new Tesla("Hyundai");
tesla.drive();
tesla.consoleCar();
