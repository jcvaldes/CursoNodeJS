function* oddsGenerator() {
  let n = 0;
  while (true) {
    yield 2 * n + 1;
    n++;
  }
}

function take(n, iter) {
  let counter = n;
  for (c of iter) {
    console.log(c);
    counter--;
    if (counter <= 0) break;
  }
}

var oddNumbers = oddsGenerator(); // TODOS los números impares

take(5, oddNumbers); // toma 5 números impares
// 1
// 3
// 5
// 7
// 9
