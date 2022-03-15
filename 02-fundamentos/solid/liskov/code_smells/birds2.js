class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}
class SwimingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimingBird {}

function makeBirdFly(bird) {
  bird.fly();
}

function makeBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

// Si es una mejora de codigo necesitamos que sea la
// misma clase y no 2 distintas de las que heredan los subtipos
// y tener una sola funcion make

makeBirdFly(duck);
makeBirdSwim(penguin);
