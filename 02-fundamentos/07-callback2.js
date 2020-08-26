let empleados = [{
  id: 1,
  nombre: 'Joaquin'
}, {
  id: 2,
  nombre: 'Oliver'
}, {
  id: 3,
  nombre: 'Juan'
}];

let salarios = [{
  id: 1,
  salario: 1000
}, {
  id: 2,
  salario: 2000
}];

// funcion callback
let getEmpleado = (id, callback) => {
  // let empleadoDB = empleados.find( function (empleado) {
  //   debugger
  //   return empleado.id === id
  // });

  let empleadoDB = empleados.find(empleado => empleado.id === id);

  if (!empleadoDB) {
      callback(`Error: no existe un empleado con id ${id}`);
  } else {
      // aca ejecuta la funcion que recibo como parametro
      callback(null, empleadoDB);
  }
}
let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);

  if (!salarioDB) {
      callback(`Error: no se encontro un salario para el empleado ${empleado.nombre}`);
  } else {
      callback(null, {
          id: empleado.id,
          nombre: empleado.nombre,
          salario: salarioDB.salario
      });
  }
}

// function principal
getEmpleado(2, (err, empleado) => {
  if (err) {
      console.log(err);
  }
  console.log(empleado);
  getSalario(empleado, (err, resp) => {
    if (err) {
        console.log(err);
    }
    console.log(resp);
  })
})