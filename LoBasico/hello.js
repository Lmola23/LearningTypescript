console.log('Hello Word');
//Si queremos activar el modo estricto de ts para que no compile el codigo si hay errores tipografico utlizaremos el comando tsc --noEmitOnError [nombre del archivo]
//Comprobando la deteccion de errores de ts
/*function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");*/
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
;
greet("Luis", new Date());
//en ts avese puede inferir el tipo y no hay que escribir la notacion explicitamente 
