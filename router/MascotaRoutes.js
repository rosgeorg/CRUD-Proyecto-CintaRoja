var express = require('express');
var router = express.Router();

const Mascota = require('../models/Mascota');

// CRUD Mascotas
router.post('/mascotas', (req, res) => {
  Mascota.create(req.body)
    .then(mascota => res.status(201).json(mascota))
    .catch(err => res.status(400).json(err));
});

router.get('/mascotas', (req, res) => {
  Mascota.find()
    .then(mascotas => {
      if (mascotas.length === 0) res.status(200).json({ mensaje: 'No hay mascotas' });
      res.status(200).json(mascotas);
    })
    .catch(err => res.status(400).json(err));
});

router.get('/mascotas/:nombre/', (req, res) => {
  const nombreMascota = req.params.nombre;
  Mascota.findOne({nombre: nombreMascota})
  //Mascota.findById(req.params.id)
    .then(mascota => res.status(200).json(mascota))
    .catch(err => res.status(404).json(err));
});

router.patch('/mascotas/:nombre', (req, res) => {
    const nombreMascota = req.params.nombre;
    Mascota.findOneAndUpdate({nombre: nombreMascota}, req.body, { new: true })
    .then(mascota => res.status(200).json(mascota))
    .catch(err => res.status(404).json(err));
});

router.delete('/mascotas/:id', (req, res) => {
  Mascota.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

router.delete('/mascotas/:nombre', (req, res) => {
  const nombreMascota = req.params.nombre;
  Mascota.findOneAndDelete({nombre: nombreMascota})
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

module.exports = router;