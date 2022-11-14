let titulo = document.getElementById("titulo");
function cambio() {
  titulo.innerHTML = "<h5>Ejercicios Basicos con javascript</h5>";
}

//ejercicio 1
//funcion que sume dos numeros
let ejercicio1 = document.getElementById("ejercicio1");
function sumar() {
  let numer1 = 5;
  let numero2 = 5;
  let suma = numer1 + numero2;
  console.log(suma);
  ejercicio1.innerHTML = suma;
}

//ejercicio 2
//Realiza una funcion que dado 3 numeros, corrobore si la multiplicacion de los 2 primeros es igual al tercer numero
let ejercicio2 = document.getElementById("ejercicio2");
function numeros(a, b, c) {
  return (ejercicio2.innerHTML = a * b === c);
}
console.log(numeros(4, 3, 12));
//console.log(numeros(5, 2, 11));

//ejercicio 3
//realiza una funcion que dado 3 parametros los sume y devuelva su promedio
let ejercicio3 = document.getElementById("ejercicio3");
function promedio(par1, par2, par3) {
  let promedio = (par1 + par2 + par3) / 3;
  return promedio;
}
ejercicio3.innerHTML = promedio(10, 10, 10);

//ejercicio 4
//Calcular el porcentaje de capacidad de un estadio. Pasando por parámetro la capacidad y los asistentes.
let ejercicio4 = document.getElementById("ejercicio4");
function personas(capacidad, asistentes) {
  let personasPresentes = (asistentes * 100) / capacidad;
  return "el promedio de capacidad ocupada es:" + personasPresentes + "%";
}
ejercicio4.innerHTML = personas(300, 150);

//ejercicio 5 concatenacion
//realiza una funcion que imprima un saludo con el nombre y apellido
let ejercicio5 = document.getElementById("ejercicio5");
function saludar(nombre, apellido) {
  return "hola" + " " + nombre + " " + apellido + " " + "¿como estas?";
}
ejercicio5.innerHTML = saludar("diego", "pico");

//ejercicio 6
//ingreso de datos
//tomar la funcion anterior pero hacer con ingreso de dato por promt
let ejercicio6 = document.getElementById("ejercicio6");
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

function saludar2() {
  return "hola" + " " + nombre + " " + apellido + " " + "como estas capoo?";
}
ejercicio6.innerHTML = saludar2();
