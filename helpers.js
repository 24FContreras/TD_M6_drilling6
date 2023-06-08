const fs = require("fs/promises");

const obtenerTareas = async () => {
  try {
    const tareas = await fs.readFile("tareas.txt");
    const tareasJson = JSON.parse(tareas);
    return tareasJson;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { obtenerTareas };
