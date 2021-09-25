export class Persona {
    constructor(nombre, edad) {
        const nombreOk = this.constructor.chequearNombre(nombre);
        this._nombre = nombreOk;
        const edadANumero = this.constructor.chequearEdad(edad);
        this._edad = edadANumero;
    }
    static chequearNombre(nombre) {
        if (!nombre) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    }
    static chequearEdad(edad) {
        if (!edad && edad != 0) {
            throw new Error("Debe ingresarse una edad para continuar");
        }
        let edadANumero;
        if (typeof edad === "number") {
            edadANumero = edad;
        }
        if (typeof edad === "string") {
            edadANumero = parseInt(edad);
            if (isNaN(edadANumero)) {
                throw new Error("El valor ingresado debe ser un número");
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
    set nombre(nuevoNombre) {
        const nombreOk = this.constructor.chequearNombre(nuevoNombre);
        this._nombre = nombreOk;
    }
    set edad(nuevaEdad) {
        const edadOk = this.constructor.chequearEdad(nuevaEdad);
        this._edad = edadOk;
    }
    obtenerDescripcion() {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}`;
        return descripcion;
    }
}
