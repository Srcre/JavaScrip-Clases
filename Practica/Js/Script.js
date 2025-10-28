
const Dolar_a_Peso = 900;

class Mascota {
    constructor(id, nombre, tipo, edad, raza, Dueño) {
        this.id = id,
        this.nombre = nombre,
        this.tipo = tipo,
        this.edad = parseInt(edad),
        this.raza = raza,
        this.dueño = Dueño;
    }

    
}

class Veterinario {
    constructor(id, nombre, especialidad) {
        this.id = id,
        this.nombre = nombre,
        this.especialidad = especialidad;
    }
}

class Consulta {
    constructor(id, mascota, veterinario, fecha, diagnostico, tratamiento,) {
        
    }
}