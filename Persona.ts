export class Persona {
    protected _nombre: string;
    protected _edad: number;

    constructor(nombre: string, edad: string | number) {
        this._nombre = this.chequearNombre(nombre);
        this._edad = this.chequearEdad(edad);
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nuevoNombre: string | null) {
        this._nombre = this.chequearNombre(nuevoNombre)
    }

    get edad(): number {
        return this._edad
    }

    set edad(nuevaEdad: string | number | null) {
        this._edad = this.chequearEdad(nuevaEdad);
    }

    chequearNombre(nombre: string | null): string {
        if (!nombre) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    }

    chequearEdad(edad: string | number | null): number {
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

    obtenerDescripcion(): string {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}`;
        return descripcion;
    }
}

export class PersonaEspecial extends Persona {
    protected _ocupacion: string;

    constructor(nombre: string, edad: number, ocupacion: string) {
        super(nombre, edad)
        this._ocupacion = ocupacion;
    }

    get ocupacion() { return this._ocupacion }

    set ocupacion(nuevaOcupacion: string) {
        this._ocupacion = this.chequearOcupacion(nuevaOcupacion)
    }

    chequearOcupacion(ocupacion: string): string {
        if (!ocupacion) { throw new Error("Debe ingresarse una ocupación") }
        return ocupacion;
    }
}