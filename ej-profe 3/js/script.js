//Definir clases

class Persona {
  constructor(rut, nombre, edad, peso, estatura) {
    (this.rut = rut),
      (this.nombre = nombre),
      (this.edad = edad),
      (this.peso = peso),
      (this.estatura = estatura);
    this.imc = 0;
  }

  get getRut() {
    return this.rut;
  }
  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }
  get getImc() {
    this.setImc();
    return this.imc;
  }

  setImc() {
    this.imc = this.peso / Math.pow(this.estatura, 2);
  }
}

let lista = [];

let addPersona = function () {
  p1 = new Persona();

  p1.rut = document.getElementById("rut").value;
  p1.nombre = document.getElementById("nom").value;
  p1.edad = parseInt(document.getElementById("edad").value);
  p1.estatura = parseFloat(document.getElementById("est").value);
  p1.peso = parseFloat(document.getElementById("peso"));

  lista.push(p1); //Agregar un objeto a una lista

  console.log(lista);
};

let findPersona = function () {
  let b = document.getElementById("rut-b").value;

  let obj = lista.find((x) => x.getRut == b);

  if (obj != undefined) {
    console.log(obj);
  } else {
    console.log("No Encontrado");
  }
};
