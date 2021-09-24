var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Persona_nombre, _Persona_edad;
const validaciones = {
    chequearNombre(nombre) {
        if (nombre === null) {
            throw new Error("Debe ingresarse un nombre para continuar");
        }
        if (nombre.length < 6) {
            throw new Error("El nombre debe tener al menos seis caracteres");
        }
        return nombre;
    },
    chequearEdad(edad) {
        if (edad === null) {
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
};
export class Persona {
    constructor(nombre, edad) {
        _Persona_nombre.set(this, void 0);
        _Persona_edad.set(this, void 0);
        const nombreOk = validaciones.chequearNombre(nombre);
        if (nombreOk) {
            __classPrivateFieldSet(this, _Persona_nombre, nombreOk, "f");
        }
        ;
        const edadANumero = validaciones.chequearEdad(edad);
        if (edadANumero) {
            __classPrivateFieldSet(this, _Persona_edad, edadANumero, "f");
        }
    }
    cambiarNombre(nuevoNombre) {
        const nombreOk = validaciones.chequearNombre(nuevoNombre);
        if (nombreOk) {
            __classPrivateFieldSet(this, _Persona_nombre, nombreOk, "f");
        }
    }
    cambiarEdad(nuevaEdad) {
        const edadOk = validaciones.chequearEdad(nuevaEdad);
        if (edadOk) {
            __classPrivateFieldSet(this, _Persona_edad, edadOk, "f");
        }
    }
    obtenerDescripcion() {
        const descripcion = `Nombre: ${__classPrivateFieldGet(this, _Persona_nombre, "f")}, Edad: ${__classPrivateFieldGet(this, _Persona_edad, "f")}`;
        return descripcion;
    }
}
_Persona_nombre = new WeakMap(), _Persona_edad = new WeakMap();
