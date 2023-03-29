const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//crear usuario
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener todos los usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un usuario
router.get("/users/:id", (req, res) => {
  const {id} = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//actualizar un usuario
router.put("/users/:id", (req, res) => {
  const {id} = req.params;
  const {nombre, edad, email, identificacion, apellido} = req.body;
  userSchema
    .updateOne({_id: id}, {$set:{nombre, edad, email, identificacion, apellido}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//eliminar un usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
