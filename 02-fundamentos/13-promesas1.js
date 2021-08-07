// function getResult() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log('Entra al timeout')
//       resolve(2)
//     }, 1000)
//   })
// }

// getResult()
//   .then(data => {
//     console.log(`El resultado es ${data}`)
//   })
//   .catch((err) => {
//     console.error(err)
//   })


const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true
    if (descuento) {
      resolve('Descuento aplicado')
    } else {
      reject('Descuento no aplicado')
    }
  }, 3000)
})

aplicarDescuento.then(result => {
  console.log(result)
}).catch((err) => {
    console.error(err)
})
