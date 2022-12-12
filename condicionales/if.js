//1- mostrar el perímetro de una circunferencia siempre y cuando el radio que se ingresa sea mayor a cero (controlar dicho radio) en caso de ingresar un radio erroneo muestre un cartel

// const pi = 3.1416;
// let radio = prompt("ingrese el radio");

// if (radio > 0) {
//   let perimetro = 2 * pi * radio;
//   console.log(perimetro);
// } else {
//   alert("ingrese un radio positivo");
// }

// 2-ingresar 2 numeros y luego mostrar por mensaje cual es el mayor

// let num1 = prompt("ingrese su numero1");
// let num2 = prompt("ingrese su 2 numero");

// if (num1 > num2) {
//   console.log("el numero 1 es mayor al numero 2");
// } else if (num1 === num2) {
//   console.log("son iguales");
// } else {
//   console.log("El numero 2 es mayor");
// }

// 3- ingresar un numero natural y verificar que el numero ingresado se encuentre dentro de la primera docena de numeros naturales, es decir entre el 1 y el 12

// let nat = prompt("ingresar su numero");
// if ((nat > 0) & (nat < 13)) {
//   console.log("se encuentra dentro de la primera docena");
// } else {
//   console.log("no se encuentra dentro de la primera docena");
// }

//4-Ingresar un numero natural, se desea saber si es par o impar

// let num = prompt("ingrese su numero");
// if (num % 2 === 0) {
//   console.log("es par");
// } else {
//   console.log("no es par");
// }

//5- Ingresar 3 numeros y mostrar el mayor
// let n1 = prompt("ingrese su primer numero");
// let n2 = prompt("ingrese su seg numero");
// let n3 = prompt("ingrese su ter numero");
// if ((n1 > n2) & (n1 > n3)) {
//   console.log("numero 1 es el mayor");
// } else if (n2 > n3) {
//   console.log("n2 es mayor");
// } else {
//   console.log("n3 es el mayor");
// }
//6- Dado un numero que simule una jugada de ruleta diga si corresponde a la primera docena, segunda docena, tercera docena

// let azar = prompt("ingrese el numero que salio");
// if ((azar >= 0) & (azar <= 12)) {
//   console.log("corresponde a la primera docena");
// } else if ((azar >= 13) & (azar <= 24)) {
//   console.log("corresponde a la segunda docena");
// } else {
//   console.log("corresponde a la 3 docena");
// }

//7- ingrese un numero random redondeando
// let aleatorio = Math.round(Math.random() * 10);
// console.log(aleatorio);

//8- Jugamos a adivinar, vamos a probar suerte la maquina elige un numero al azar y nosotros tenemos que adivinarlo, vamos a probar del 0 al 5

// let azar = Math.round(Math.random() * 5);
// console.log(azar);
// let adiv = prompt("ingrese su numero");

// if (adiv == azar) {
//   console.log("usted adivino el numero es un genio");
// } else {
//   console.log("lo siento la proxima será");
// }

//9- Ingrese un numero y diga que cantidad de digitos ingresados, sabiendo que el maximo es 4

// let dig = prompt("ingrese su numero");
// if ((dig.length >= 1) & (dig.length <= 4)) {
//   console.log(`el numero tiene ${dig.length} digitos`);
// } else {
//   console.log("ingrese un numero que contenga hasta 4 digitos");
// }

//10- Según la nota obtenida en el exámen coloque la calificación correspondiente
//1 - 3 desaprobado  4-5 aprobado apenas 6-9 muy bien  10 - excelente

// let nota = prompt("ingrese su nota");
// if ((nota > 0) & (nota <= 3)) {
//   console.log("estas desaprobado");
// } else if ((nota >= 4) & (nota < 6)) {
//   console.log("aprobado apenas");
// } else if ((nota >= 6) & (nota <= 9)) {
//   console.log("aprobaste muy bien");
// } else if (nota == 10) {
//   console.log("aprobaste perfect");
// } else {
//   console.log("ingrese una nota valida");
// }

//11- Simule una jugada de ruleta y diga si acerto o no( tiene 3 tiros de la suerte)
// let jugada = Math.round(Math.random() * 36);

// let juego1 = prompt("Juegue su primer numero del 0 al 36");
// let juego2 = prompt("juegue su 2 numero");
// let juego3 = prompt("juegue su 3 numero");

// if (juego1 == jugada || juego2 == jugada || juego3 == jugada) {
//   console.log(`salio el numero ${jugada} ganaste`);
// } else {
//   console.log(`salio el numero ${jugada} la proxima será`);
// }
