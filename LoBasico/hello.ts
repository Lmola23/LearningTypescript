console.log('Hello Word');
//Si queremos activar el modo estricto de ts para que no compile el codigo si hay errores tipografico utlizaremos el comando tsc --noEmitOnError [nombre del archivo]

//Comprobando la deteccion de errores de ts
/*function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");*/

function greet(person : string , date:Date) :void {
  console.log(`Hello ${person}, today is ${date.toDateString()}`)
};


greet("Luis", new Date());
//en ts avese puede inferir el tipo y no hay que escribir la notacion explicitamente 

//Si queremos ts tranpile a una version mas de ES utlizaremso tsc --target es[version] [nombreArchivo]

//banderas de rigor de typescript : mediante strict de activan todas 


//noImplicitAny : al activar esta bandera genera un error en cualquier tipo que infiera un any 

//strictNullChecks : hace que el manejo de null y de undefine sea mas explicito y nos evita preocupanos por si se nos olvida manejar null y undefine 