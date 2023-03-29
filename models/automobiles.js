const mongoose = require("mongoose");

const automobilSchema = mongoose.Schema({
  marca: {
    type: String,
    require: true
  },
  modelo: {
    type: Number,
    require: true
  },
  placa: {
    type: String,
    require: true
  },
  tipoCombustible: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Automobiles',automobilSchema);