// WHILE

// let i = 9999;
// while (i < 10000) {
//   console.log('Hola mundo');
//   i++;
// }

// DO WHILE <--- Siempre se ejecuta al menos una vez

// let i = 10000;
// do {
//   console.log('Hola mundo');
//   i++;
// } while (i < 10000);

// TAREA (condicionales compuestas &&, ||, !)
// Escriba un algoritmo que pueda evaluar si un número esta dentro del rango de 5 a 10.

// Simule un estado de logueo con usuario y contraseña y, solo si no esta logueado, muestre un mensaje de error repetitivo.

// let user = '';
// let pass = '';

// let userOk = 'rolling';
// let passOk = '1234';

// do {
//   user = prompt(
//     'Ingrese su usuario: '
//   ).toLowerCase();
//   pass = prompt('Ingrese su contraseña: ');
//   if (user === userOk && pass === passOk) {
//     alert('Autenticado!');
//   } else {
//     alert('Usuario o contraseña erroneos.');
//   }
// } while (user !== userOk || pass !== passOk);

// TAREA
// Simule un ingreso de un numero de telefono en un prompt y valide si el
//dato es correcto por la cantidad de digitos y repita el ingreso las veces que sea necesario.

// let numero=prompt("ingrese telefono");

// if (numero.length===10) {
//   alert("numero correcto")
// }else{
//   alert("su numero es incorrecto")
// };
// let numero = prompt("ingrese telefono");
// do {

//   if (numero.length === 10) {
//     alert("numero correcto");
//   } else {
//     alert("su numero es incorrecto");
//   }
// } while (numero.length != 10);

//2)

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10.

// for (let index = 1; index <= 10; index++) {
//   // Bloque de código
//   console.log(index);
// }

// Explicando el paso de for (sale mal)
// for (let i = 0; i < 22; i++) {
//   // Bloque de código
//   i++;
//   console.log(i);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10 de mayor a menor.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre si cada uno de los numeros del 1 al 10 son múltiplos de 2.

// for (let index = 1; index <=10 ;index++) {

//   if (index % 2 ===0) {
//     console.log(index)
//   }
// }

// Escribe un algoritmo que muestre solo los numeros pares del 1 al 10
// for (let i = 1; i <=10; i++) {

//   i++
//   console.log(i
//     )
// }

// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un juego de 10 preguntas
// y respuestas donde cada respuesta correcta sume un punto. Al final del juego debe mostrar
//cuantos puntos sumo el jugador.
// let pregunta1 ="en que fecha salio campeon argentina?";
//  let pregunta2 ="cuando son las elecciones en tucuman?";
// let pregunta3 ="en que fecha se juega el partido amistoso argentina-panama?";

// let respuesta1 = "18 de diciembre del 2023";
//  let respuesta2="22 de mayo del 2023";
// let respuesta3="23 de marzo del 2023";

// if (
//   pregunta1 === respuesta1 &&
//   pregunta2 === respuesta2 &&
//   pregunta3 === respuesta3
// ) {
//   console.log("tienes 3 puntos");
// } else if (
//   pregunta1 === respuesta1 &&
//   pregunta2 === respuesta2 &&
//   pregunta3 !== respuesta3
// ) {
//   console.log("tiene dos puntos");
// } else if (
//   pregunta1 === respuesta1 &&
//   pregunta2 !== respuesta2 &&
//   pregunta3 === respuesta3
// ) {
//   console.log("tiene dos puntos");
// } else if (
//   pregunta1 !== respuesta1 &&
//   pregunta2 === respuesta2 &&
//   pregunta3 === respuesta3
// ) {
//   console.log("tiene dos puntos");
// }

// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un algoritmo que pida dos numeros y
//la operacion a realizar (+, -, *, /) y muestre el resultado. Validar que los datos ingresados
//sean correctos y volver a pedirlos si es necesario.
