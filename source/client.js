export default class Client {
    constructor(name, favoriteCar) {
        this.name = name;
        this.favoriteCar = favoriteCar;
    }

    getClientFavoriteCar() {
        return `${this.name} favorite car is ${this.favoriteCar}`
    }
}