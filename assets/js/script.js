const Lista_tareas = [
  { id: 1, tarea: "Pasera al perro", confirmado: true },
  { id: 2, tarea: "Ir a comprar vegetales a la Feria", confirmado: false },
  { id: 3, tarea: "Terminar mi tarea de Desafío Latam ", confirmado: true },
  {
    id: 4,
    tarea: "Ir a comprar los remedios a la farmacia",
    confirmado: false,
  },
  {
    id: 5,
    tarea: "Recordar ir al médico para llevar el examen ",
    confirmado: false,
  },
];

// const posicion = personas.findIndex((persona) => persona == "juan");

// personas.splice(posicion, 1);
// console.log(personas);

let ultimo_id = Lista_tareas.length;

function actuaLizarListaAsistentes() {
  let html = "";
  html = `<div class='asistente'> 
            <div> <h4>ID<h4/> 
             </div>
            <div class='nombre_asistente'><h4>Tarea</h4></div>
          </div>
          <div class='estado_tarea'>
             </div>
             <div class='accion_boton'>
         </div>  
    </div>`;
  let total_confirmados = 0;
  for (const asistente of Lista_tareas) {
    let estaCheck = "";
    if (asistente.confirmado === true) {
      estaCheck = "checked";
      total_confirmados++;
    }
    html += `
    <div class='asistente'> 
            <div class='ID'>
                ${asistente.id}
             </div>
        <div class='nombre_asistente'>
                ${asistente.tarea}
             </div>
             <div class='estado_tarea'>
                <input type="checkbox" onclick="confirmar_asistente(${asistente.id})" ${estaCheck} />
             </div>
             <div class='accion_boton'>
                <button class="boton_X" onclick="quitarpersona(${asistente.id})" type="button">X</button>  
         </div>  
    </div>`;
  }
  document.querySelector("#listaAsistentes").innerHTML = html;
  // console.log("confirmaciones total: " + total_confirmados);
  document.querySelector("#total_final").innerHTML = Lista_tareas.length;
  document.querySelector("#total").innerHTML = total_confirmados;
}

const agregar_persona = function (event) {
  event.preventDefault();
  const nombre_personaX = document.querySelector("#nuevo_asistente");
  ultimo_id++;
  Lista_tareas.push({
    id: ultimo_id,
    tarea: nombre_personaX.value,
    confirmado: false,
  });
  actuaLizarListaAsistentes();
  nombre_personaX.value = "";
  console.log(Lista_tareas);
};

const quitarpersona = function (id) {
  // alert("se debe quitar el elemento" + id);
  const posicionAEliminar = Lista_tareas.findIndex(
    (persona) => persona.id === id
  );
  Lista_tareas.splice(posicionAEliminar, 1);
  actuaLizarListaAsistentes();
  console.log(Lista_tareas);
};

const confirmar_asistente = function (id) {
  // alert("se debe cambiar el estado" + id);
  const posicion_cambiar = Lista_tareas.findIndex(
    (persona) => persona.id === id
  );
  Lista_tareas[posicion_cambiar].confirmado =
    !Lista_tareas[posicion_cambiar].confirmado;
  actuaLizarListaAsistentes();
  console.log(Lista_tareas);
};

actuaLizarListaAsistentes();
