let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Oliver');
        }, 3000);
    });
};


// getNombre().then(nombre => { 
//     console.log(nombre);
// })
let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error de async: ', e);
});