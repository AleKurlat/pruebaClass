export class Persona {
    protected _nombre: string;
    protected _edad: number;
    ['constructor']!: typeof Persona;

    static chequearNombre(nombre: string | null) {
        if (!nombre) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    }

    static chequearEdad(edad: string | number | null) {
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

    constructor(nombre: string, edad: string | number) {
        this._nombre = this.constructor.chequearNombre(nombre);
        this._edad = this.constructor.chequearEdad(edad);
    }

    set nombre(nuevoNombre: string | null) {
        this._nombre = this.constructor.chequearNombre(nuevoNombre)
    }

    get nombre() {
        return this._nombre;
    }

    set edad(nuevaEdad: string | number | null) {
        this._edad = this.constructor.chequearEdad(nuevaEdad);
    }

    get edad() {
        return this._edad
    }

    obtenerDescripcion() {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}`;
        return descripcion;
    }
}