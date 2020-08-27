let vehiculos = [{
  id: 1,
  marca: "Mazda",
  modelo: 2016
}, {
  id: 2,
  marca: "Toyota",
  modelo: 2018
}, {
  id: 3,
  marca: "Hyundai",
  modelo: 2018
}]

console.log('--- Filter ---');

let filtrarVehiculos = vehiculos.filter( vehiculo => vehiculo.modelo > 2016 )

console.log("filtarVehiculos ", filtarVehiculos);

console.log('--- Find ---');

let buscarVehiculo = vehiculos.find( vehiculo => vehiculo.id === 1 )

console.log("buscarVehiculo ", buscarVehiculo);
