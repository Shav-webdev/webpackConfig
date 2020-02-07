import Client from "./client";

class Car {
    constructor(model, color, date) {
        this.model = model;
        this.color = color;
    }

    getModel() {
        return this.model;
    }
    getColor() {
        return this.color;
    }
}

const bmw = new Car("BMW", "black").getModel();
const volvo = new Car("Volvo", "white").getModel();

const client = new Client("John", bmw);
const client1 = new Client("Jack", volvo);

console.log(bmw);
console.log(client);
console.log(client1);