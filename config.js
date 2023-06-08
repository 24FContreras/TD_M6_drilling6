//CONFIG OBJS
const createConfig = {
  titulo: {
    describe: "El nombre de la tarea a realizar",
    alias: "t",
    demandOption: true,
  },
  contenido: {
    describe: "Descripción de la tarea a realizar",
    alias: "c",
    demandOption: true,
  },
};

const deleteConfig = {
  id: {
    describe: "El id o identificador de la tarea a realizar",
    alias: "i",
    demandOption: true,
  },
};

const updateConfig = {
  titulo: {
    describe: "Nuevo nombre de la tarea a realizar",
    alias: "t",
  },
  contenido: {
    describe: "Nueva descripción de la tarea a realizar",
    alias: "c",
  },
  id: {
    describe: "El id o identificador de la tarea a realizar",
    alias: "i",
    demandOption: true,
  },
};

module.exports = { createConfig, deleteConfig, updateConfig };
