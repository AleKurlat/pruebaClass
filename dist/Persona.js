export class Persona {
    constructor(nombre, edad) {
        this._nombre = this.constructor.chequearNombre(nombre);
        this._edad = this.constructor.chequearEdad(edad);
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
        this._nombre = this.constructor.chequearNombre(nuevoNombre);
    }
    get nombre() {
        return this._nombre;
    }
    set edad(nuevaEdad) {
        this._edad = this.constructor.chequearEdad(nuevaEdad);
    }
    get edad() {
        return this._edad;
    }
    obtenerDescripcion() {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}`;
        return descripcion;
    }
}
