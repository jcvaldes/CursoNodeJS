let nombre, mensaje

nombre = 'Juan'
nombre = "Oliver Queen"

mensaje = "y oliver dijo \'Le haz fallado a esta ciudad\'"


//Concatenar
mensaje = 'JAVA' + 'SCRIPT'
let aprendiendo = 'Aprendiendo '
    tecnologia  = 'Javascript, HTML, PHP '

let otroMensaje = aprendiendo.concat(tecnologia)
console.log(otroMensaje)

// busca en una cadena el indice
console.log(otroMensaje.indexOf('Javascript'));
console.log(otroMensaje.indexOf('CSS'));


console.log(otroMensaje.substr(0,13));

// similar substr
console.log(otroMensaje.slice(0, 11));
// en negativo empieza de atras para adelante
console.log(otroMensaje.slice(-3));


console.log(otroMensaje.split(', '));


console.log(otroMensaje.repeat(10));