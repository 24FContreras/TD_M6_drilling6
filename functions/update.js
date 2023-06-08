const fs = require("fs/promises");
const { obtenerTareas } = require("../helpers.js");

const updateFunction = async ({ titulo, contenido, id }) => {
  try {
    const arrayTareas = await obtenerTareas();

    const tareaModificar = arrayTareas.findIndex((tarea) => tarea.id === id);
    if (tareaModificar === -1)
      throw new Error(`La tarea con el id ${id} no existe`);

    const tituloNuevo = titulo ? titulo : arrayTareas[tareaModificar].titulo;
    const contenidoNuevo = contenido
      ? contenido
      : arrayTareas[tareaModificar].contenido;

    arrayTareas[tareaModificar].titulo = tituloNuevo;
    arrayTareas[tareaModificar].contenido = contenidoNuevo;

    await fs.writeFile("tareas.txt", JSON.stringify(arrayTareas, null, 2));
    console.log("Se ha modificado la tarea ID " + id);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { updateFunction };
