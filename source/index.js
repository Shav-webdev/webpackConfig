import Client from "./client";
import "./assets/styles/style.css"
import "./assets/styles/box.less"
import pic from "./assets/pic.jpg"
import Car from "./car";
import "./bable"



const bmw = new Car("BMW", "black").getModel();
const volvo = new Car("Volvo", "white").getModel();
const webpack = new Car("Webpack", "white", pic).getImage();

const client = new Client("John", bmw);
const client1 = new Client("Jack", volvo);
const client2 = new Client("Webpack", webpack);

console.log(bmw);
console.log(client);
console.log(client1);
console.log(client2);