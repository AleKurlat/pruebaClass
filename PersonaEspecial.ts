
import { Persona } from "./Persona"

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

    chequearOcupacion(ocupacion: string): string {
        if (!ocupacion) { throw new Error("Debe ingresarse una ocupación") }
        return ocupacion;
    }
}