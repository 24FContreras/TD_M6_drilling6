const fs = require("fs/promises");
var _ = require("lodash");
const { obtenerTareas } = require("../helpers.js");

const deleteFunction = async ({ id }) => {
  try {
    const arrayTareas = await obtenerTareas();

    if (!arrayTareas.some((tarea) => tarea.id === id))
      throw new Error(`La tarea con el id ${id} no existe`);

    _.remove(arrayTareas, function (tarea) {
      return tarea.id === id;
    });

    await fs.writeFile("tareas.txt", JSON.stringify(arrayTareas, null, 2));
    console.log("Se ha eliminado la tarea ID " + id);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { deleteFunction };
