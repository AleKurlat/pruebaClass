const validaciones = {
    chequearNombre(nombre) {
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
    },

    chequearEdad(edad) {
        const edadANumero = parseInt(edad);
        if (isNaN(edadANumero)) {
            throw new Error("Se debe ingresar un número");
        }
        const esMayorOIgualQueCero = edadANumero >= 0;
        if (!esMayorOIgualQueCero) {
            throw new Error("El número ingresado debe ser mayor igual a 0");
        }
    }
}

export class Persona {
    constructor(nombre, edad) {
        validaciones.chequearNombre(nombre);
        this.nombre = nombre;
        validaciones.chequearEdad(edad);
        this.edad = edad;
    }

    cambiarNombre(nuevoNombre) {
        validaciones.chequearNombre(nuevoNombre);
        this.nombre = nuevoNombre;
    }

    cambiarEdad(nuevaEdad) {
        validaciones.chequearEdad(nuevaEdad);
        this.edad = nuevaEdad;
    }

    obtenerDescripcion() {
        const descripcion = `Nombre: ${this.nombre}, Edad: ${this.edad}`;
        return descripcion;
    }
}