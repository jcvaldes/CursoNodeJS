
// let getNombre = () => {
//     return 'Joaquín';
// };
// console.log(getNombre())
debugger

// con async devuelve una promesa
let getNombre = async() => {
    // throw new Error('No existe un nombre para ese usuario');
    return 'Joaquín';
};
// getNombre().then(nombre => {
//     debugger
//     console.log(nombre)
// }).catch(error => {console.error(error)})   

// async function getNombreAsync() {

// }
// También funciona
// let getNombre = async function() {
//     throw new Error('No existe un nombre para ese usuario');
//     return 'Joaquín';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('Oliver');
    });
};
// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log('Error de async: ', err);
// });