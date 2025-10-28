document.addEventListener("DOMContentLoaded", () => {

    const USD_A_CLP = 900; // tipo de cambio

    // ==== Clases ====
    class Mascota {
        constructor(id, nombre, tipo, edad, raza, dueño) {
            this.id = id;
            this.nombre = nombre;
            this.tipo = tipo;
            this.edad = parseFloat(edad);
            this.raza = raza;
            this.dueño = dueño;
        }
    }

    class Veterinario {
        constructor(id, nombre, especialidad, tarifaBaseUSD, imagen) {
            this.id = id;
            this.nombre = nombre;
            this.especialidad = especialidad;
            this.tarifaBaseUSD = parseFloat(tarifaBaseUSD);
            this.imagen = imagen;
        }
    }

    class Consulta {
        constructor(id, mascota, veterinario, fecha, diagnostico, tratamiento, costoFinalUSD) {
            this.id = id;
            this.mascota = mascota;
            this.veterinario = veterinario;
            this.fecha = fecha;
            this.diagnostico = diagnostico;
            this.tratamiento = tratamiento;
            this.costoFinalUSD = costoFinalUSD;
        }
    }

    // ==== Datos precargados ====
    const mascotas = [
        new Mascota(1, "Toby", "Perro", 0.5, "Labrador", "María Pérez"),
        new Mascota(2, "Mishi", "Gato", 3, "Siamés", "Carlos Soto"),
        new Mascota(3, "Rex", "Perro", 11, "Pastor Alemán", "Ana Torres"),
        new Mascota(4, "Nina", "Gato", 0.9, "Común", "Pedro Ramírez")
    ];

    const veterinarios = [
        new Veterinario(1, "Dra. Laura Gómez", "Cirugía", 40),
        new Veterinario(2, "Dr. Carlos Martínez", "General", 30),
        new Veterinario(3, "Dra. Ana Rodríguez", "General", 35)
    ];

    let consultas = JSON.parse(localStorage.getItem("consultas")) || [];

    // ==== Elementos del DOM ====
    const selMascota = document.getElementById("seleccionarMascota");
    const selVet = document.getElementById("seleccionarVeterinario");
    const fecha = document.getElementById("fecha");
    const diag = document.getElementById("diag");
    const trata = document.getElementById("trata");
    const costo = document.getElementById("costoUSD");
    const alerta = document.querySelector(".alerta");
    const tabla = document.querySelector("#tablaConsultas tbody");
    const btnBuscar = document.getElementById("btnBuscar");
    const buscarID = document.getElementById("buscarID");
    const detalleConsulta = document.getElementById("detalleConsulta");
    const btnReset = document.getElementById("btnReset");
    const btnRecargar = document.getElementById("btnRecargar");

    // ==== Funciones ====

    function mostrarAlerta(msg, tipo = "danger") {
        alerta.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`;
        setTimeout(() => alerta.innerHTML = "", 4000);
    }

    function poblarSelects() {
        // Mascotas
        selMascota.innerHTML = '<option value="">Seleccione una mascota</option>';
        mascotas.forEach(m => {
            const opt = document.createElement("option");
            opt.value = m.id;
            opt.textContent = `${m.nombre} (${m.tipo}) - ${m.dueño}`;
            selMascota.appendChild(opt);
        });

        // Veterinarios
        selVet.innerHTML = '<option value="">Seleccione un veterinario</option>';
        veterinarios.forEach(v => {
            const opt = document.createElement("option");
            opt.value = v.id;
            opt.textContent = `${v.nombre} - ${v.especialidad}`;
            selVet.appendChild(opt);
        });
    }

    function calcularCostoFinal(vet, mascota) {
        let costo = vet.tarifaBaseUSD;

        // Descuento o recargo
        if (mascota.edad < 1) costo *= 0.85;      // -15%
        else if (mascota.edad > 10) costo *= 1.10; // +10%

        // +5% insumos
        costo *= 1.05;

        return parseFloat(costo.toFixed(2));
    }

    function guardarConsultas() {
        localStorage.setItem("consultas", JSON.stringify(consultas));
    }

    function renderTabla() {
        tabla.innerHTML = "";
        if (consultas.length === 0) {
            tabla.innerHTML = `<tr><td colspan="9" class="text-center">No hay registros</td></tr>`;
            return;
        }
        consultas.forEach(c => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${c.id}</td>
                <td>${c.mascota.tipo}</td>
                <td>${c.mascota.nombre}</td>
                <td>${c.mascota.dueño}</td>
                <td>${c.veterinario.nombre} (${c.veterinario.especialidad})</td>
                <td>${c.fecha}</td>
                <td>${c.costoFinalUSD.toFixed(2)}</td>
                <td>${(c.costoFinalUSD * USD_A_CLP).toLocaleString('es-CL')}</td>
                <td><button class="btn btn-sm btn-danger" data-id="${c.id}">Eliminar</button></td>
            `;
            tabla.appendChild(fila);
        });

        document.querySelectorAll(".btn-danger").forEach(b => {
            b.addEventListener("click", e => {
                const id = parseInt(e.target.dataset.id);
                consultas = consultas.filter(c => c.id !== id);
                guardarConsultas();
                renderTabla();
                mostrarAlerta("Consulta eliminada", "info");
            });
        });
    }

    function agregarConsulta(e) {
        e.preventDefault();

        const mascotaID = parseInt(selMascota.value);
        const vetID = parseInt(selVet.value);

        if (!mascotaID) return mostrarAlerta("Debe seleccionar una mascota");
        if (!vetID) return mostrarAlerta("Debe seleccionar un veterinario");
        if (!fecha.value) return mostrarAlerta("Debe ingresar una fecha");

        const mascota = mascotas.find(m => m.id === mascotaID);
        const vet = veterinarios.find(v => v.id === vetID);

        const costoFinal = calcularCostoFinal(vet, mascota);

        const nueva = new Consulta(
            consultas.length ? consultas[consultas.length - 1].id + 1 : 1,
            mascota,
            vet,
            fecha.value,
            diag.value.trim(),
            trata.value.trim(),
            costoFinal
        );

        consultas.push(nueva);
        guardarConsultas();
        renderTabla();

        mostrarAlerta("Consulta agregada correctamente", "success");
        document.getElementById("Consulta").reset();
        costo.value = "";
    }

    function buscarConsulta() {
        detalleConsulta.innerHTML = "";
        const id = parseInt(buscarID.value);
        if (!id) return mostrarAlerta("Ingrese un ID válido");
        const c = consultas.find(x => x.id === id);
        if (!c) return mostrarAlerta("No se encontró esa consulta", "warning");

        detalleConsulta.innerHTML = `
        <div class="card mt-3">
            <div class="card-body">
                <h5>Detalle de la consulta ID ${c.id}</h5>
                <p><strong>Mascota:</strong> ${c.mascota.nombre} (${c.mascota.tipo})</p>
                <p><strong>Veterinario:</strong> ${c.veterinario.nombre} - ${c.veterinario.especialidad}</p>
                <p><strong>Fecha:</strong> ${c.fecha}</p>
                <p><strong>Diagnóstico:</strong> ${c.diagnostico || '-'}</p>
                <p><strong>Tratamiento:</strong> ${c.tratamiento || '-'}</p>
                <p><strong>Costo:</strong> ${c.costoFinalUSD.toFixed(2)} USD / ${(c.costoFinalUSD * USD_A_CLP).toLocaleString('es-CL')} CLP</p>
            </div>
        </div>`;
    }

    // ==== Eventos ====
    document.getElementById("Consulta").addEventListener("submit", agregarConsulta);
    btnBuscar.addEventListener("click", buscarConsulta);
    btnReset.addEventListener("click", () => document.getElementById("Consulta").reset());
    btnRecargar.addEventListener("click", renderTabla);
    selVet.addEventListener("change", () => {
        const v = veterinarios.find(x => x.id == selVet.value);
        costo.value = v ? v.tarifaBaseUSD.toFixed(2) : "";
    });

    // ==== Inicializar ====
    poblarSelects();
    renderTabla();
});
