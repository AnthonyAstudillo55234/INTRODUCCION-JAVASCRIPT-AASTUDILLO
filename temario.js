// JS - Lado del cliente
// NODE + V8 = JS Lado del servidor

// Variables
// contenedor de información

// Tipos simples
let data = 12 // entero
let data1 = 23.6 // float
let data3 = "hola" // string
let data4 = '@' // char
let data5 = false // boolean
let data6 = undefined // undefined

// Tipos compuestas

let data7 = ['hola',54,false] // array

let user = { // objeto
name:"Anthony",
activo:true
}

// no usar var - hoisting
// let const

// ----------------------------------------------------------------------------------

//Strings - cadena de caracteres
let password = '12345anthonyASTUDILLO'

// Propiedades
console.log(password.length); // te dice cuantos caracteres tiene

// Métodos
console.log(password.trim()); // elimina los espacios
console.log(password.includes('8')) // te indica si el valor existe en la linea
console.log(password.toLocaleUpperCase()); // hace mayusculas
console.log(password.toLocaleLowerCase()); // hace minusculas

// ES6( Ecmascript 6) - nuevas caracteristicas
// Template strings
console.log(`El password es: ${password}`);

// -----------------------------------------------------------------------------------

let gamPrice1 = "500.35"
let gamPrice2 = 500.35

// Casting - ES6
console.log(+gamPrice1+gamPrice2);

// Orden de ejecución de los operadores ( * / + - ** () )

// -------------------------------------------------------------------------------------

let userCardBalance = 500
let cardBalance = 1000

// ES6 Operador ternario

let result = cardBalance <= userCardBalance ? "Pay" : "Consuming";

// Valores verdaderos - truthy

// Valores falsos - falsy

let email
!email ? console.log("Provie an email") : console.log("Registre");

// Comparación estricta ===
let userID = 123
userID === "123" ? console.log("User Found") : console.log("User doesn´t exit");

// ------------------------------------------------------------------------------------

// Loops - bucles

const goals = ['Learn JS','Play Soccer','Watching Netflix','Enjoy the holiday']

goals.forEach((goal)=>{console.log(goal)});

goals.map((goal)=>{console.log(goal)});