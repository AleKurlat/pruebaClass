export class Persona {
    constructor(nombre, edad) {
        this._nombre = this.chequearNombre(nombre);
        this._edad = this.chequearEdad(edad);
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = this.chequearNombre(nuevoNombre);
    }
    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        this._edad = this.chequearEdad(nuevaEdad);
    }
    chequearNombre(nombre) {
        if (!nombre) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    }
    chequearEdad(edad) {
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
    obtenerDescripcion() {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}`;
        return descripcion;
    }
}
export class PersonaEspecial extends Persona {
    constructor(nombre, edad, ocupacion) {
        super(nombre, edad);
        this._ocupacion = ocupacion;
    }
    get ocupacion() { return this._ocupacion; }
    set ocupacion(nuevaOcupacion) {
        this._ocupacion = this.chequearOcupacion(nuevaOcupacion);
    }
    chequearOcupacion(ocupacion) {
        if (!ocupacion) {
            throw new Error("Debe ingresarse una ocupación");
        }
        return ocupacion;
    }
}
