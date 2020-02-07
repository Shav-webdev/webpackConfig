import Client from "./client";
import styles from "../source/style.css"
import pic from "./assets/pic.jpeg"

class Car {
    constructor(model, color, img) {
        this.model = model;
        this.color = color;
        this.img = img
    }

    getModel() {
        return this.model;
    }
    getColor() {
        return this.color;
    }
    getImage() {
        return JSON.stringify({img : this.img});
    }
}

const bmw = new Car("BMW", "black").getModel();
const volvo = new Car("Volvo", "white").getModel();
const webpack = new Car("Webpack", "white").getImage();

const client = new Client("John", bmw);
const client1 = new Client("Jack", volvo);
const client2 = new Client("Webpack", webpack);

console.log(bmw);
console.log(client);
console.log(client1);
console.log(client2);