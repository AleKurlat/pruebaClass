const validaciones = {
    chequearNombre(nombre: string | null) {
        if (nombre === null) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    },

    chequearEdad(edad: string | number | null) {
        if (edad === null) {
            throw new Error("Debe ingresarse una edad para continuar");
        }

        let edadANumero: number | undefined;

        if (typeof edad === "number") {
            edadANumero = edad;
        }

        if (typeof edad === "string") {
            edadANumero = parseInt(edad)
            if (isNaN(edadANumero)) {
                throw new Error("Se debe ingresar un número");
            }
        }
        if (edadANumero) {
            const esMayorOIgualQueCero = edadANumero >= 0;
            if (!esMayorOIgualQueCero) {
                throw new Error("El número ingresado debe ser mayor igual a 0");
            }
            return edadANumero;
        }
    }
}

export class Persona {
    #nombre?: string;
    #edad?: number;

    constructor(nombre: string, edad: string | number) {
        const nombreOk = validaciones.chequearNombre(nombre);
        if (nombreOk) { this.#nombre = nombreOk };
        const edadANumero = validaciones.chequearEdad(edad);
        if (edadANumero) { this.#edad = edadANumero; }
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