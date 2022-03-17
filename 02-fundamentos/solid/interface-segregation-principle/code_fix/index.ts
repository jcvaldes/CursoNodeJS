import { Animal } from "./Domain/interfaces/Animal";
import { Dog } from "./Domain/Dog";
import { Bird } from "./Domain/Bird";

const makeAnimal = (animal: Animal) => {
    animal.run();
}

const animal: Animal = new Dog();
makeAnimal(animal);

const oliver: Dog = animal as Dog;
oliver.bark();

const bird: Bird = new Bird();
makeAnimal(bird);
bird.fly()





