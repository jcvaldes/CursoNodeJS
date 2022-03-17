// Este ejemplo está mejor pero los metodo que no le corresponde a cada animal no los tendria que implementar
// ni tener ni siquiera una implementacion por defecto
/**
 * Abstract Class Animal.
 *
 * @class Animal
 */
class Animal {
  constructor() {
    if (this.constructor == Animal) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  fly() {
    console.log("I can not fly");
  }
  swim() {
    console.log("I can not swim");
  }
}
class Duck extends Animal {
  quack() {
    console.log("I can quack");
  }
  fly() {
    console.log("I can fly");
  }
}

class Penguin extends Animal {
  swim() {
    console.log("I can swim");
  }
}

class BirdFactory {
  makeBird(bird) {
    switch (bird.constructor) {
      case Duck:
        return new Duck();
      case Penguin:
        return new Penguin();
    }
  }
}

const duck = new Duck();
const penguin = new Penguin();

const birdFactory = new BirdFactory();

const bird1 = birdFactory.makeBird(duck);
const bird2 = birdFactory.makeBird(penguin);

bird1.fly();
bird1.swim();
bird2.swim();
bird2.fly();
