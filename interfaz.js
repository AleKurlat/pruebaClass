import { Persona } from "./Persona.js";

const formulario = document.querySelector("#formulario");
const campoNombre = formulario.querySelector("input[name='nombre']");
const campoEdad = formulario.querySelector("input[name='edad']");
const areaPersonas = document.querySelector("#areaPersonas");
document.querySelector("#botonAgregar").addEventListener("click", agregarPersona);

const personas = [];

function agregarPersona(e) {
    const valorNombre = campoNombre.value;
    const valorEdad = parseInt(campoEdad.value);
    const nuevaPersona = Persona.crearPersona(valorNombre, valorEdad);
    if (nuevaPersona) {
        personas.push(nuevaPersona);
        actualizarPersonas();
    }
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
    areaPersonas.innerHTML = "";
    areaPersonas.appendChild(listaPersonas);
}

function editarPersona(persona) {
    const nuevoNombre = prompt("Ingresar nuevo nombre");
    persona.cambiarNombre(nuevoNombre);
    const nuevaEdad = prompt("Ingresar nueva edad");
    persona.cambiarEdad(parseInt(nuevaEdad));
    actualizarPersonas();
}