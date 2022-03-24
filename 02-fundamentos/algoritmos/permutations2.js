const words = ["kellogg", "go", "hola", "lego", "hug", "kocomo", "hello"];
const letters = ["a", "h", "l", "e", "l", "o", "g", "k"];

let permutations = [];
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

const toString = () => {
  // Mostrar la palabra mas larga que se encontro con la cadena de letras en words
};

const app = () => {
  let chain = "";
  for (let i = 0; i < letters.length; i++) {
    chain = chain.length === 0 ? letters[0] : chain + letters[i];
    console.log(chain);
    if (chain.length > 1) {
      permutations.push(permutation(chain));
      console.log(permutations);
    } else {
      permutations.push([chain]);
    }
  }
};

try {
  app();
  // getIntersection();
} catch (e) {
  console.error(`Error: ${e.message}`);
}
