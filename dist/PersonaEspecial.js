import { Persona } from "./Persona.js";
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
    obtenerDescripcion() {
        const descripcion = `Nombre: ${this._nombre}, Edad: ${this._edad}, Ocupación: ${this._ocupacion}`;
        return descripcion;
    }
}
