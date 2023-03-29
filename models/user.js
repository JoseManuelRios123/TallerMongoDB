const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  apellido: {
    type: String,
    require: true
  },
  identificacion: {
    type: Number,
    require: true
  },
  edad: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('User',userSchema);

