let getUsuarioById = (id, callback) => {
  let usuario = {
      nombre: 'Oliver Queen',
      id
  }
  if (id === 20) {
    callback('Error: no existe un usuario con id 20');
  } else {
    callback(null, usuario);
  }
}

getUsuarioById(10, (err, usuario) => {
  if (err) {
      return console.log(err);
  }
  console.log('Usuario de DB', usuario);

})