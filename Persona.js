function chequearNombre(nombre) {
    if (nombre.length < 6) {
        alert("El nombre debe tener al menos seis caracteres");
        return false;
    }
    return true;
}

function chequearEdad(edad) {
    if (typeof edad !== "number") {
        alert("Debe ingresar un número");
        return false;
    }
    const esMayorOIgualQueCero = edad >= 0;
    if (!esMayorOIgualQueCero) {
        alert("El número ingresado debe ser mayor igual a 0");
        return false;
    }
    return true;
}

export function crearPersona(nombre, edad) {
    const nombreOk = chequearNombre(nombre);
    const edadOk = chequearEdad(edad);
    if (nombreOk && edadOk) {
        return { nombre, edad }
    }
}

export function cambiarNombre(nuevoNombre, persona) {
    if (chequearNombre(nuevoNombre)) {
        persona.nombre = nuevoNombre;
    }
}

export function cambiarEdad(nuevaEdad, persona) {
    if (chequearEdad(nuevaEdad)) {
        persona.edad = nuevaEdad;
    }
}

export function obtenerDescripcion(persona) {
    const descripcion = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
    return descripcion;
}
