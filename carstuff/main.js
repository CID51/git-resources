import Car from "./car.js";
import {calculateRentPrice} from "./priceCalculator.js";
import {rentCar, returnCar} from "./rental.js";

let car1 = new Car("Honda", "Civic", 2024, 30, true);
let car2 = new Car("Jeep", "Wagoneer", 2024, 60, true);

rentCar(car1);
console.log(`The rent will cost $` + calculateRentPrice(3, parseInt(car1.pricePerDay)));
returnCar(car1);