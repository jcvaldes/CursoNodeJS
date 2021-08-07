const heroes = ['Superman', 'Batman', 'Aquaman', 'Wonderwoman'];

console.log('For tradicional');
for (let i = 0; i < heroes; i++ ) {
  console.log(heroes[i]);
}

console.log('For in');
for (let i in heroes) {
  console.log(heroes[i]);
}

console.log('For of'); 
for(let heroe of heroes) {
  console.log(heroe);
}

heroes.forEach((heroe, index) => {
  console.log(heroe, index);
})

const misHeroes = heroes.map(item => {
  if (item !== 'Wonderwoman') {
    return item
  }
});
// Puedo recorrerlo sin retornar
heroes.map((item, index) => {
  console.log(index);
});
console.log(misHeroes);