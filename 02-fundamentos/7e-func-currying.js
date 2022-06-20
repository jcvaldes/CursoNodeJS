function log(date) {
  return (prioridad) => (mensaje) => {
    console.log(`
    [${date.getHours()}:${date.getMinutes()}] [${prioridad}] ${mensaje}`)
  }
}

let logActual = log(new Date())
let logInfornacion = logActual('Información')
let logError = logActual('Error')
logInfornacion('Es una prueba')
logError('error logueado')
