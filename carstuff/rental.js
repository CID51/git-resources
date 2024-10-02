import Car from "./car.js";

export function rentCar(car){
    if (car.isAvailable){
        console.log(`You are now renting the ${car.make} ${car.model}`);
        car.isAvailable = false;
    }
    else{
        console.log(`the ${car.make} ${car.model} doesn't seem to exist.`)
    }
}

export function returnCar(car){
    if (!car.isAvailable){
        console.log(`You returned the ${car.make} ${car.model}`);
        car.isAvailable = true;
    }
    else{
        console.log(`the ${car.make} ${car.model} doesn't seem to be rented.`)
    }
}
