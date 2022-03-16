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

  run() {}
}
class Swim extends Animal {
  swim() {
    console.log("I can swim");
  }
}

class FlySwim extends Animal {
  fly() {
    console.log("I can fly");
  }
  swim() {
    console.log("I can swim");
  }
}
// admas de volar puede nadar y como en javascript no tengo interfaces
// hago una clase que implemente los 2 metodos y la hago heredar de ahi
// lo ideal es usar typescript para hacer uso de interfaces
class Duck extends FlySwim {
  constructor() {
    super();
    this.run();
  }
  quack() {
    console.log("I can quack");
  }
  run() {
    console.log("Duck is running");
  }
}

class Penguin extends Swim {
  constructor() {
    super();
    this.run();
  }
  run() {
    console.log("Penguin is running");
  }
}

const birdType = {
  Duck,
  Penguin,
};
class BirdFactory {
  makeBird(birdType) {
    switch (birdType) {
      case Duck:
        return new Duck();
      case Penguin:
        return new Penguin();
    }
  }
}

const birdFactory = new BirdFactory();

const bird1 = birdFactory.makeBird(birdType.Duck);
const bird2 = birdFactory.makeBird(birdType.Penguin);

bird1.fly();
bird1.quack();
bird1.swim();

bird2.swim();

// Falla porque no la necesita ya que es un pinguino y no puede volar
// bird2.fly();
