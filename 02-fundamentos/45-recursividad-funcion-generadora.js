// const rootObj = {
//   name: "Juan",
//   lastName: "Valdes",
//   phones: [
//     {
//       number: "3232123312",
//       country: 54,
//     },
//     {
//       number: "2233332133",
//       country: 55,
//     },
//   ],
// };
const rootObj = {
  foo: "bar",
  arr: [1, 2, 3],
  subo: {
    foo2: "bar2",
  },
};

const propsToEncrypt = [
  { prop: "name", type: "string" },
  {
    prop: "lastName",
    type: "string",
  },
  {
    prop: "phones",
    items: [{ prop: "number" }],
  },
];

function* traverse(o, path = []) {
  const memory = new Set();
  
  for (let i of Object.keys(o)) {
    const itemPath = path.concat(i);
    yield [i, o[i], itemPath];
    if (o[i] !== null && typeof (o[i] == "object")) {
      yield* traverse(o[i], itemPath);
    }
  }
}

for (let [key, value, path] of traverse(rootObj)) {
  console.log(key, value, path);
}
