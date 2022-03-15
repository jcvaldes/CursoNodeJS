function* counterGenerator() {
  let i = 0;
  while (true) {
    const str = yield i;
    console.log(str);
    i++;
  }
}

var counter = counterGenerator();

counter.next("hi");
// { value: 0, done: false }
// el primer 'next' no imprime nada porque el generador se ejecuta solo hasta el yield
counter.next("ho");
// ho
// { value: 1, done: false }
counter.next("hu");
// hu
// { value: 2, done: false }
