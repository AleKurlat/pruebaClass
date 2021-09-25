
import { Persona } from "./Persona.js"

export class PersonaEspecial extends Persona {
    protected _ocupacion: string;

    constructor(nombre: string, edad: string | number, ocupacion: string) {
        super(nombre, edad)
        this._ocupacion = ocupacion;
    }

    get ocupacion() { return this._ocupacion }

    set ocupacion(nuevaOcupacion: string) {
        this._ocupacion = this.chequearOcupacion(nuevaOcupacion)
    }

    protected chequearOcupacion(ocupacion: string): string {
        if (!ocupacion) { throw new Error("Debe ingresarse una ocupación") }
        return ocupacion;
    }

    public obtenerDescripcion(): string {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}, Ocupación: ${this._ocupacion}`;
        return descripcion;
    }
}