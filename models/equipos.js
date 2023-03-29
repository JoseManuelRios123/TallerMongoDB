const mongoose = require("mongoose");

const equiposSchema = mongoose.Schema({
  Nombre: {
    type: String,
    require: true
  },
  Año: {
    type: Number,
    require: true
  },
  Estadio: {
    type: String,
    require: true
  },
  Pais: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('equipos',equiposSchema);