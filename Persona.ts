const validaciones = {
    chequearNombre(nombre: string | null) {
        if (typeof nombre === null) {
            throw new Error("El nombre no puede ser nulo");
        }
        if (typeof nombre === "string" && nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    },

    chequearEdad(edad: string | number | null) {
        if (typeof edad === null) {
            throw new Error("La edad no puede ser nula");
        }

        let edadANumero: number;

        if (typeof edad === "number") {
            edadANumero = edad;
        }

        if (typeof edad === "string") {
            edadANumero = parseInt(edad)
            if (isNaN(edadANumero)) {
                throw new Error("Se debe ingresar un número");
            }
        }

        const esMayorOIgualQueCero = edadANumero! >= 0;
        if (!esMayorOIgualQueCero) {
            throw new Error("El número ingresado debe ser mayor igual a 0");
        }
        return edadANumero!;
    }
}

export class Persona {
    #nombre: string
    #edad: number
    constructor(nombre: string, edad: string | number) {
        validaciones.chequearNombre(nombre);
        this.#nombre = nombre;
        const edadANumero = validaciones.chequearEdad(edad);
        this.#edad = edadANumero;
    }

    cambiarNombre(nuevoNombre: string | null) {
        const nombreOk = validaciones.chequearNombre(nuevoNombre)
        if (nombreOk) { this.#nombre = nombreOk }
    }

    cambiarEdad(nuevaEdad: string | number | null) {
        const edadOk = validaciones.chequearEdad(nuevaEdad);
        if (edadOk) { this.#edad = edadOk }
    }

    obtenerDescripcion() {
        const descripcion = `Nombre: ${this.#nombre}, Edad: ${this.#edad}`;
        return descripcion;
    }
}