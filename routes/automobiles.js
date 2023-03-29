const express = require("express");
const automobilSchema = require("../models/automobiles");

const router = express.Router();

//crear automobil
router.post("/automobiless", (req, res) => {
  const autos = automobilSchema(req.body);
  autos
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los automobiles
router.get("/automobiles", (req, res) => {
  automobilSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un automobil
router.get("/automobiles/:id", (req, res) => {
  const {id} = req.params;
  automobilSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un automobil
router.put("/automobiles/:id", (req, res) => {
  const {id} = req.params;
  const {marca, modelo, placa, tipoCombustible} = req.body;
  automobilSchema
    .updateOne({_id: id}, {$set:{marca, modelo, placa, tipoCombustible}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un automobil
router.delete("/automobiles/:id", (req, res) => {
  const { id } = req.params;
  automobilSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;