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
        this.imc = 0,
        this.Especialista = null;

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

    get getEspecialista(){
        return this.Especialista;
    }

    setEspecialista(){
        this.especialista = Especialista;
    }

    setImc(){
        this.imc = this.peso / Math.pow(this.estatura,2);
    }

    setEspecialista(especialista){
        this.especialista = especialista;
    }
    
    /*

    saludo(){
        return ('Que tal soy ' + this.nombre);
        console.log('Que sucede? ${nombre}')
    }

    */
    
}

class Especialista{
    constructor(rutE, nombreE,  edadE){
        this.rut = rutE,
        this.nombre = nombreE,
        this.edad = edadE
    }

    get getRutE(){
        return this.rut;
    }

    get getNombreE(){
        return this.nombre;
    }

    get getEdadE(){
        return this.edad;
    }
}

let lista = [];

let addPersona = function () {
    p1 = new Persona();

    p1.rut = document.getElementById("rut").value;
    p1.nombre = document.getElementById("nombre").value;
    p1.edad = parseInt(document.getElementById("edad").value);
    p1.estatura = parseFloat(document.getElementById("estatura").value);
    p1.peso = parseFloat(document.getElementById("peso").value);

    lista.push(p1); //Agregar un objeto a una lista
    console.log(lista);
    alert("La persona se agrego correctamente :D ")

    let nombreEsp = document.getElementById("especialista-nom").value;
    let espAsignado = listaE.find(x => x.getNombreE === nombreEsp);

    if (espAsignado != undefined) {
        p1.setEspecialista(espAsignado);
        lista.push(p1);
        console.log(lista);
        alert("La persona se agrego correctamente con un especialista asginado :D");

    }else{
        alert("Especialista no encontrado: Porfavor agrega uno primero");
    }
}

let findPersona = function(){
    let b = document.getElementById("rut-b").value;
    
    let obj = lista.find(x => x.getRut == b);

    if (obj != undefined){
        console.log(obj);
        document.getElementById("r-nom").innerHTML = "Nombre: " + obj.getNombre;
        document.getElementById("r-edad").innerHTML = "Edad: " + obj.getEdad;
        document.getElementById("r-peso").innerHTML = "Peso: " + obj.getPeso;
        document.getElementById("r-est").innerHTML = "Estatura: " + obj.getEstatura;
        document.getElementById("r-imc").innerHTML = "IMC: " + obj.getImc;

        if (obj.getEspecialista) {
            document.getElementById("r-especialista").innerHTML = "Especialista: " + obj.getEspecialista.getNombreE;
        }else{
            document.getElementById("r-especialista").innerHTML = "Especialista: No asignado"; 
        }

    }else{
        console.log("no encontrado")
    }

}

let listaE = [];

let agregarEspecialista = function (){
    pE = new Especialista();

    pE.rut = document.getElementById("rutE").value;
    pE.nombre = document.getElementById("nombreE").value;
    pE.edad = parseInt(document.getElementById("edadE").value);
    
    listaE.push(pE);
    console.log(pE);
    alert("El especialista se agrego correctamente");
}

let buscarEspecialista= function (){
    let e = document.getElementById("nombre-e").value;

    let objE = listaE.find(x => x.getNombreE == e);

    if (objE !== undefined) {
        console.log(objE);
        alert("Especialista Encontrado: " + objE.getNombreE);
    }else{
        alert("No encontrado D:")
    }
}



/*
Tarea 1: usar lo aprendido pero hacerlo en un formulario (Completo)
Tarea 2: agregar una clase especialista y que tenga una regla la cual sea la siguiente: una persona debe de ser atentida por un especialista
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
