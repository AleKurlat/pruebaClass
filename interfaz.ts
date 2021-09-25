import { Persona } from "./Persona.js";
const personas: Array<Persona> = [];
document.querySelector("#botonAgregar")!.addEventListener("click", agregarPersona);

function agregarPersona(): void {
    const formulario = document.querySelector("#formulario");
    const valorNombre = (<HTMLInputElement>formulario!.querySelector("input[name='nombre']")).value;
    const valorEdad = (<HTMLInputElement>formulario!.querySelector("input[name='edad']")).value;
    try {
        const nuevaPersona: Persona = new Persona(valorNombre, valorEdad);
        personas.push(nuevaPersona);
        actualizarPersonas();
    }
    catch (e) { if (e instanceof Error) { alert(e.message) } }
}

function editarPersona(persona: Persona): void {
    try {
        const nuevoNombre = prompt("Ingresar nuevo nombre");
        persona.nombre = nuevoNombre;
        const nuevaEdad = prompt("Ingresar nueva edad");
        persona.edad = nuevaEdad;
        actualizarPersonas();
    }
    catch (e) { if (e instanceof Error) { alert(e.message) } }
}

function actualizarPersonas(): void {
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
    areaPersonas!.innerHTML = "";
    areaPersonas!.appendChild(listaPersonas);
}

