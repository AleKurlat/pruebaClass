const formulario = document.querySelector("#formulario");
const campoNombre = formulario.querySelector("input[name='nombre']");
const campoEdad = formulario.querySelector("input[name='edad']");
const areaPersonas = document.querySelector("#areaPersonas");
document.querySelector("#botonAgregar").addEventListener("click", agregarPersona);

const personas = [];

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    static crearPersona(nombre, edad) {
        const nombreOk = this.chequearNombre(nombre);
        const edadOk = this.chequearEdad(edad);
        if (nombreOk && edadOk) {
            return new Persona(nombre, edad);
        }
    }

    static chequearNombre(nombre) {
        if (nombre.length < 6) {
            alert("El nombre debe tener al menos seis caracteres");
            return false;
        }
        return true;
    }

    static chequearEdad(edad) {
        if (typeof edad !== "number") {
            alert("Debe ingresar un número");
            return false;
        }
        const esMayorOIgualQueCero = edad >= 0;
        if (!esMayorOIgualQueCero) {
            alert("El número ingresado debe ser mayor igual a 0");
            return false;
        }
        return true;
    }

    cambiarNombre(nuevoNombre) {
        if (Persona.chequearNombre(nuevoNombre)) {
            this.nombre = nuevoNombre;
        }
    }

    cambiarEdad(nuevaEdad) {
        if (Persona.chequearEdad(nuevaEdad)) {
            this.edad = nuevaEdad;
        }
    }

    obtenerDescripcion() {
        const descripcion = `Nombre: ${this.nombre}, Edad: ${this.edad}`;
        return descripcion;
    }
}

function agregarPersona(e) {
    const valorNombre = campoNombre.value;
    const valorEdad = parseInt(campoEdad.value);
    const nuevaPersona = Persona.crearPersona(valorNombre, valorEdad);
    if (nuevaPersona) {
        personas.push(nuevaPersona);
        actualizarPersonas();
    }
}

function actualizarPersonas() {
    let listaPersonas = document.createElement("div");
    personas.forEach((persona, i) => {
        let nuevoParrafo = document.createElement("p")
        let nuevoTexto = document.createTextNode(`${i}) ${persona.obtenerDescripcion()}`);
        let nuevoBoton = document.createElement("button");
        nuevoBoton.innerHTML = "Editar";
        nuevoBoton.onclick = () => { editarPersona(i) }
        nuevoParrafo.appendChild(nuevoTexto);
        nuevoParrafo.appendChild(nuevoBoton);
        listaPersonas.appendChild(nuevoParrafo);
    })
    areaPersonas.innerHTML = "";
    areaPersonas.appendChild(listaPersonas);
}

function editarPersona(i) {
    const nuevoNombre = prompt("Ingresar nuevo nombre");
    personas[i].cambiarNombre(nuevoNombre);
    const nuevaEdad = prompt("Ingresar nueva edad");
    personas[i].cambiarEdad(parseInt(nuevaEdad));
    actualizarPersonas();
}