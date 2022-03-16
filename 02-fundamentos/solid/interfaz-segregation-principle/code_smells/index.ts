interface Animal {
  fly();
  run();
  bark();
}

class Dog implements Animal {
  fly() { }

  run() {
      console.log("Dog is running");
  }

  bark() {
      console.log("Dog is barking");
  }
}

class Bird implements Animal {
  bark() { }
  run() {
      console.log("Bird is running");
  }
  fly() {
      console.log("Bird is flying");
  }
}