const express = require("express");
const equiposSchema = require("../models/equipos");

const router = express.Router();

//crear automobil
router.post("/equipos", (req, res) => {
  const equipos = equiposSchema(req.body);
  equipos
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los automobiles
router.get("/equipos", (req, res) => {
  equiposSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un automobil
router.get("/equipos/:id", (req, res) => {
  const {id} = req.params;
  equiposSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un automobil
router.put("/equipos/:id", (req, res) => {
  const {id} = req.params;
  const {Nombre, Año, Estadio, Pais} = req.body;
  equiposSchema
    .updateOne({_id: id}, {$set:{Nombre, Año, Estadio, Pais}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un automobil
router.delete("/equipos/:id", (req, res) => {
  const { id } = req.params;
  equiposSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;