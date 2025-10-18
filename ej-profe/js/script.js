//Definir clases

class Persona{
constructor(rut, nombre, edad, peso, estatura){
     this.rut = rut,
     this.nombre = nombre,
     this.edad = edad,
     this.peso = peso,
     this.estatura = estatura
     this.imc = 0
}

get getRut(){
     return this.rut;
}
get getNombre(){
     return this.nombre;
}
get getEdad(){
     return this.edad;
}
get getImc(){
     this.setImc();
     return this.imc;
}

setImc(){
     this.imc = this.peso / Math.pow(this.estatura,2);
}

}

let lista = [];

let addPersona = function(){
     p1 = new Persona();

     p1.rut = prompt("Agregar Rut:");
     p1.nombre = prompt("Agregar Nombre:");
     p1.edad = parseInt(prompt("Agregar Edad:"));
     p1.estatura = parseFloat(prompt("Agregar Estatura:"));
     p1.peso = parseFloat(prompt("Agregar Peso:"));

     lista.push(p1);
     console.log(lista);

}