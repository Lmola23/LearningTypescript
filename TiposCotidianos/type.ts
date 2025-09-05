//Los primitivos : string , number y boolean 

  //Matrices : para expecificar array se utlizara la sinaxis number[] o tambien puedes verla como Array<number> 

  //Any:puedes ser cualquier cosa y es aplicable cualquier operacion legible .

//noImplicitAny:cuando ts no puede inferir el tipo lo utilara any esto no combiene use el indicador del compilador como any : 

let myName: string = "Luis"; // esto en la mayoria de los casos es inneserio ya que ts intenta inferir el tipo
//funciones : 
//anotaciones de tipo de retorno : 
function getFavoriteNumber():number {
  return 26;
}

//promise 

async function getFavoriteNumberAsyns(): Promise<number>  { 
  return 26;
}

//funciones anonimas 
 const names = ["alice","Bob", "Eve"];


 names.forEach(function(s){
  console.log(s);
 })

names.forEach((s)=>console.log(s));


//tipos de objetos 

function printCoord(pt:{x:number , y:number}){
  console.log(`Cordenada X :${pt.x}, Cordenada Y ${pt.y}`);
}

//Propiedades opcionales utlizaremos el operador ? 

function printName(obj: {firt?:string, last?:string}){
  console.log("hola mundo");
}

//Tipos de union
function printId(id:number | string){
  console.log(`You id is ${id}`);
}
//type script sol permite una operacion si es valida para todos los miembros de la union .la solucion es restringir la union con condicional 

function printIdSecont(id:number|string ){
  if(typeof id ===  "string" ){
    console.log(id.toLocaleUpperCase());
  }else {
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
//Alias de typo 
type tp = {
  x:number,
  y:number
}

//tambien podemos nombrar una union con type 

type Id = number| string;

//Interfes
 
interface Point {
  x:number,
  y:number
}
//Podemos utlizar las afirmaciones de type como as y los corchete  angulares para especificarle a ts cual es el typo explicito ]\
//Exiten tambein los literale 

type bool= "false"|"true"; 
