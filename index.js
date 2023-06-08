//DEPENDENCIES
const yargs = require("yargs");
const { argv } = require("process");

//CONFIG
const { createConfig, deleteConfig, updateConfig } = require("./config.js");

//FUNCTIONS
//Nota: vi el drilling y dije "oh no, me adelanté!"
const { createFunction } = require("./functions/create.js");
const { readFunction } = require("./functions/read.js");
const { updateFunction } = require("./functions/update.js");
const { deleteFunction } = require("./functions/delete.js");

//COMMANDS
const args = yargs
  .command("create", "Crear una nueva tarea", createConfig, (argv) =>
    createFunction(argv)
  )
  .command("read", "Mostrar todas las tareas", (argv) => readFunction())
  .command("update", "Actualizar o modificar una tarea", updateConfig, (argv) =>
    updateFunction(argv)
  )
  .command("delete", "Eliminar una tarea", deleteConfig, (argv) =>
    deleteFunction(argv)
  )
  .help().argv;
