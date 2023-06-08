const fs = require("fs/promises");
const { obtenerTareas } = require("../helpers.js");

const readFunction = async () => {
  try {
    const arrayTareas = await obtenerTareas();

    if (!arrayTareas.length) throw new Error("No existe niguna tarea");
    //RESULT
    let contador = 0;

    for (const tarea of arrayTareas) {
      const { titulo, contenido } = tarea;
      contador++;
      console.log(
        `📌Tarea N° ${contador}
Título: ${titulo}
Contenido: ${contenido}
 `
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { readFunction };
