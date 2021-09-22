export class Persona {
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