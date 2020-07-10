function getResult() {
  return new Promise((reject, resolve) => {
    setTimeout(function() {
      console.log('Entra al timeout');
      resolve(2)
    }, 1000)
  })
}

getResult().then(data => {
  console.log( `El resultado es ${data}`  )
}).catch(err => {
  console.error(err);
})
