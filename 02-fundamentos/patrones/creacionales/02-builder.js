// const pizzaDeBacon = new PizzaDeBacon()
// const pizzaDeFuggaza = new PizzaDeFuggaza()

// class Pizza {
//   constructor(tomato, cheese, bacon, otherIngredients) {
//     this.tomato = tomato || false
//     this.cheese = cheese || false
//     this.bacon = bacon || 0
//     this.otherIngredients = otherIngredients || []
//   }
// }

// const pizza = new Pizza(true, true, 3, ['cebolla', 'aceitunas'])
// console.log(pizza);

class Pizza {
  constructor() {
    this.tomato = false
    this.cheese = false
    this.bacon = 0
    this.otherIngredients = []
  }
  setTomato() {
    this.tomato = true
    return this
  }
  setCheese() {
    this.cheese = true
    return this
  }
  setBacon() {
    this.bacon = true
    return this
  }
  addOtherIngredients(ingredient) {
    this.otherIngredients.push(ingredient)
    return this
  }
  build() {
    return {
      tomato: this.tomato,
      cheese: this.cheese,
      bacon: this.bacon,
      otherIngredients: this.otherIngredients,
    }
  }
}
// puedo crear todas las variaciones de pizza

// const pizza = new Pizza().build()
const pizzaMuzza = new Pizza()
                  .setCheese()
                  .setTomato()


console.log(pizzaMuzza.build())

const pizzaWithBacon = new Pizza()
                  .setBacon()
                  .addOtherIngredients('aceitunas verdes')
                  .addOtherIngredients('aceitunas negras')

console.log(pizzaWithBacon.build())
