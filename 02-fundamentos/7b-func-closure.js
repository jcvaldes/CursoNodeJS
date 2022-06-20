function iniciar() {
  const nombre = 'Juan'
  function mostrarNombre() {
    alert(nombre)
  }
  // mostrarNombre()
  return mostrarNombre
}

let iniciarFunc
function onClick(e) {
  iniciarFunc = iniciar()
}

function onClickEjecutar(e) {
  debugger
  iniciarFunc()
}

document.getElementById('app').innerHTML = `
  <h1>Closure</h1>
  <div>
    <button id="ok">Acción</button>
    <button id="ejecutar">Ejecutar</button>
  </div>
`

document.getElementById('ok').addEventListener('click', onClick)
document.getElementById('ejecutar').addEventListener('click', onClickEjecutar)
