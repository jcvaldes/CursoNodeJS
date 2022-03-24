const words = ["kellogg", "go", "hola", "lego", "hug", "kocomo", "hello"];
let letters = ["a", "h", "l", "e", "l", "o", "g", "k"].sort();

const toString = () => {
  // Mostrar la palabra mas larga que se encontro con la cadena de letras en words
};

const search = (word) => {
  let arr = [...word];
  arr.forEach((letter) => {
    let res = letters.find((l) => {
      if (l === letter) {
      }
    });
  });
  return true;
};
words.forEach((word) => {
  const isValid = search(word);
  console.log(isValid);
});

// try {
//   app();
//   // getIntersection();
// } catch (e) {
//   console.error(`Error: ${e.message}`);
// }
