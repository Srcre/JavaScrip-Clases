/*
    Anotaciones de clase (se debera estudiar para la prueba)
    Clase = es el elemeto que se crea apartir de cosas reales (personas, animales, aves) que tienen elementos (personas = rut, nombre, apelido, etc -> elementos de persona) 
    Objetos = es la información que tendra la clase, es decir que un objeto yace de la clase.
*/

// Definir clases

class Persona{
    constructor(rut, nombre,  edad, peso, estatura){
        this.rut = rut,
        this.nombre = nombre,
        this.edad = edad,
        this.peso = peso,
        this.estatura = estatura,
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

    get getPeso(){
        return this.peso;
    }

    get getEstatura(){
        return this.estatura;
    }

    get getImc(){
        this.setImc();
        return this.imc;
    }

    setImc(){
        this.imc = this.peso / Math.pow(this.estatura,2);
    }

    /*

    saludo(){
        return ('Que tal soy ' + this.nombre);
        console.log('Que sucede? ${nombre}')
    }

    */
    
}

let lista = [];

let addPersona = function () {
    p1 = new Persona();

    p1.rut = prompt("Agregar Rut");
    p1.nombre = prompt("Agregar un Nombre: ");
    p1.edad = parseInt(prompt("Agregar Edad: "));
    p1.estatura = parseFloat(prompt("Agregar Estatura: "))
    p1.peso = parseFloat(prompt("Agregar Peso: "));

    lista.push(p1);
    console.log(lista);
}

/*
Tarea:
*/




/* 

const persona1 = new Persona("123332-1", "Pepe", 30, 55, 1.90);
const persona2 = new Persona("123332-1", "Elena", 33, 90, 1.69);

persona2.setImc();
alert(persona2.getRut+ " "+persona2.getNombre+" "+persona2.getImc)

const persona1 = new Persona("1-1", "Josent", 35)
alert(persona1.saludo())
// persona1.saludo();

*/
