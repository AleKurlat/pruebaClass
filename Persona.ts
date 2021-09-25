export class Persona {
    protected _nombre: string;
    protected _edad: number;

    static chequearNombre(nombre: string | null): string {
        if (!nombre) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    }

    static chequearEdad(edad: string | number | null): number {
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
        this._nombre = (<typeof Persona>this.constructor).chequearNombre(nombre);
        this._edad = (<typeof Persona>this.constructor).chequearEdad(edad);
    }

    set nombre(nuevoNombre: string | null) {
        this._nombre = (<typeof Persona>this.constructor).chequearNombre(nuevoNombre)
    }

    get nombre(): string {
        return this._nombre;
    }

    set edad(nuevaEdad: string | number | null) {
        this._edad = (<typeof Persona>this.constructor).chequearEdad(nuevaEdad);
    }

    get edad(): number {
        return this._edad
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

    static chequearOcupacion(ocupacion: string): string {
        if (!ocupacion) { throw new Error("Debe ingresarse una ocupación") }
        return ocupacion;
    }
    get ocupacion() { return this._ocupacion }
    set ocupacion(nuevaOcupacion: string) {
        this._ocupacion = (<typeof PersonaEspecial>this.constructor).chequearOcupacion(nuevaOcupacion)
    }
}