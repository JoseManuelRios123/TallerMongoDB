const mongoose = require("mongoose");

const futbolistasSchema = mongoose.Schema({
  Nombre: {
    type: String,
    require: true
  },
  Edad: {
    type: Number,
    require: true
  },
  Equipo_actual: {
    type: String,
    require: true
  },
  Posicion: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('futbolistas',futbolistasSchema);