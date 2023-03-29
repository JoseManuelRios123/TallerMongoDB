const express = require("express");
const futbolistasSchema = require("../models/futbolistas");

const router = express.Router();

//crear automobil
router.post("/futbolistas", (req, res) => {
  const futbolistas = futbolistasSchema(req.body);
  futbolistas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los automobiles
router.get("/futbolistas", (req, res) => {
  futbolistasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un automobil
router.get("/futbolistas/:id", (req, res) => {
  const {id} = req.params;
  futbolistasSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un automobil
router.put("/futbolistas/:id", (req, res) => {
  const {id} = req.params;
  const {Nombre, Edad, Equipo_actual, Posicion} = req.body;
  futbolistasSchema
    .updateOne({_id: id}, {$set:{Nombre, Edad, Equipo_actual, Posicion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un automobil
router.delete("/futbolistas/:id", (req, res) => {
  const { id } = req.params;
  futbolistasSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;