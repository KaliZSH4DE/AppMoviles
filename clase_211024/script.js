//FUNCION FLECHA


//1. *************************/

function mifuncion (a,b){
    return a+b;
}

//2. *************************/

console.log(mifuncion(2,3));

//ESTRUCTURA DE LA FUNCION FLECHA

let salu2 = () => {};
//3. *************************/
let saludo = (nombre) => {
    return 'Saludos ' + nombre;
}

console.log(saludo('juan'));

//4. *************************/

let saludar = nombre => 'saludos ' + nombre;

console.log(saludar('Ramiro'));


//5. ************PASAR PARAMETROS*************/

let suma = (a,b) => a+b;
console.log(suma(5,8));

//6. ************CREAR OBJETO EN LA FUNCION FLECHA*************/

let obj = () => ({nombre:'Roberto', edad:20})

//LLAMAMOS AL OBJETO Y ACCEDEMOS A LA PROPIEDAD

let persona = obj().nombre;

console.log(persona);

console.log(obj().nombre);

//7. *********ARREGLOS***********

let arrFunc = () => [1,2,3,4,5];

//ACCEDIENDO A TODO EL ARREGLO

console.log(arrFunc())

//ACCEDIENDO AL ARREGLO

console.log(arrFunc()[4])