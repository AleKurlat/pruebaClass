import { Persona } from "./Persona.js";
const personas = [];
document.querySelector("#botonAgregar").addEventListener("click", agregarPersona);

function agregarPersona() {
    const formulario = document.querySelector("#formulario");
    const valorNombre = formulario.querySelector("input[name='nombre']").value;
    const valorEdad = formulario.querySelector("input[name='edad']").value;
    try {
        const nuevaPersona = new Persona(valorNombre, valorEdad);
        personas.push(nuevaPersona);
        actualizarPersonas();
    }
    catch (e) { alert(e.message) }
}

function editarPersona(persona) {
    try {
        const nuevoNombre = prompt("Ingresar nuevo nombre");
        persona.cambiarNombre(nuevoNombre);
        const nuevaEdad = prompt("Ingresar nueva edad");
        persona.cambiarEdad(nuevaEdad);
        actualizarPersonas();
    }
    catch (e) { alert(e.message) }
}

function actualizarPersonas() {
    let listaPersonas = document.createElement("div");
    personas.forEach((persona, i) => {
        let nuevoParrafo = document.createElement("p")
        let nuevoTexto = document.createTextNode(`${i}) ${persona.obtenerDescripcion()}`);
        let nuevoBoton = document.createElement("button");
        nuevoBoton.innerHTML = "Editar";
        nuevoBoton.onclick = () => { editarPersona(persona) }
        nuevoParrafo.appendChild(nuevoTexto);
        nuevoParrafo.appendChild(nuevoBoton);
        listaPersonas.appendChild(nuevoParrafo);
    })
    const areaPersonas = document.querySelector("#areaPersonas");
    areaPersonas.innerHTML = "";
    areaPersonas.appendChild(listaPersonas);
}

