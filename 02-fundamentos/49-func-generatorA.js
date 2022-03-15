function* counterGenerator() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

var counter = counterGenerator();

console.log(counter.next().value); // { value: 0, done: false }
console.log(counter.next().value); // { value: 1, done: false }
console.log(counter.next().value); // { value: 2, done: false }
// hasta el infinito y más allá!
