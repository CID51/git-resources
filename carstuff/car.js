export default class Car{
    constructor(make, model, year, pricePerDay, isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.pricePerDay = pricePerDay;
        this.isAvailable = isAvailable || true;
    }
}

