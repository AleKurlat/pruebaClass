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
        const edadANumero = typeof edad === "number" ? edad : parseInt(edad);
        if (isNaN(edadANumero)) {
            throw new Error("El valor ingresado debe ser un número");
        }
        const esMayorOIgualQueCero = edadANumero >= 0;
        if (!esMayorOIgualQueCero) {
            throw new Error("El número ingresado debe ser mayor igual a 0");
        }
        return edadANumero;
    }
    set nombre(nuevoNombre) {
        const nombreOk = this.constructor.chequearNombre(nuevoNombre);
        this._nombre = nombreOk;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(nuevaEdad) {
        const edadOk = this.constructor.chequearEdad(nuevaEdad);
        this._edad = edadOk;
    }
    get edad() {
        return this._edad;
    }
    obtenerDescripcion() {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}`;
        return descripcion;
    }
}
