export default class Car {
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
