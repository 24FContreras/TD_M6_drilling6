const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const { obtenerTareas } = require("../helpers.js");

const createFunction = async ({ titulo, contenido }) => {
  try {
    const arrayTareas = await obtenerTareas();
    const id = uuidv4().slice(0, 8);

    if (arrayTareas.some((tarea) => tarea.id === id))
      throw new Error("El ID ya existe");

    if (!titulo || !contenido)
      throw new Error("Debes ingresar todos los campos");

    const nuevaTarea = { id, titulo, contenido };
    arrayTareas.push(nuevaTarea);
    await fs.writeFile("tareas.txt", JSON.stringify(arrayTareas, null, 2));
    console.log("Nueva tarea agregada");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createFunction };
