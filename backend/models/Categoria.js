const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
  area: {
    type: String,
    required: true,
  },
  seccion: {
    type: String,
    required: true,
  },
  subseccion: {
    type: String,
    required: true,
  },
});

module.exports = model("Categoria", CategoriaSchema);