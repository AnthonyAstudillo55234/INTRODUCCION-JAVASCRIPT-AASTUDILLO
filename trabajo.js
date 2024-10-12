// ANTHONY ASTUDILLO

// VARIABLES 
// SIMPLES
var estadoArticulo = true
let numeroTelefono = 984823869
const correoElectronico = "gamers@gamersecuador.store"

// COMPUESTAS

let compatibility = ['PS4, PS5, Xbox, iPhone']

let producto = { // objeto
    name:"Soporte de Controles Cable Guy",
    price: 59,
    desing:"Sonic",
    weight:1.43,
    brand:"Cable Guys",
    compatibility,
    activo:true
}

console.log(producto);
console.log(`El precio con cambio a String es: ${producto.price.toString()}`);
console.log(`El nombre en mayúsculas es: ${producto.name.toLocaleUpperCase()}`);
console.log(`El numero de caracteres de la marca es: ${producto.brand.length}`);