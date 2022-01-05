/*
Bonus:
1. What's the Time complexity?
2. What's the Space complexity?
*/

words = ["kellogg", "go", "hola", "lego", "hug", "kocomo", "hello"];
letters = ["a", "h", "l", "e", "l", "o", "g", "k"];

function permutation(chain) {
  if (typeof chain != "string") {
    throw TypeError("El argumento debe ser una cadena de caracteres");
  }

  if (chain.length <= 2) {
    return chain.length === 2 ? [chain, chain[1] + chain[0]] : [chain];
  }

  return chain
    .split("")
    .reduce(
      (a, c, i) =>
        a.concat(
          permutation(chain.slice(0, i) + chain.slice(i + 1)).map((v) => c + v)
        ),
      []
    );
}

const findWord = (word) => {};
const toString = () => {
  // Mostrar la palabra mas larga que se encontro con la cadena de letras en words
};

try {
  const chain = letters.join(", ").replaceAll(", ", "");
  let permutations = [];
  permutations = [...permutation(chain)];
  console.log(permutations);
} catch (e) {
  console.error(`Error: ${e.message}`);
}
