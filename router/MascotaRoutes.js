var express = require('express');
var router = express.Router();

const Mascota = require('../models/mascota');

// CRUD Mascotas
router.post('/mascotas', (req, res) => {
  Mascota.create(req.body)
    .then(articulo => res.status(201).json(articulo))
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

router.get('/api/v1/mascotas/:id', (req, res) => {
  Mascota.findById(req.params.id)
    .then(articulo => res.status(200).json(articulo))
    .catch(err => res.status(404).json(err));
});

router.patch('/api/v1/mascotas/:id', (req, res) => {
  Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(articulo => res.status(200).json(articulo))
    .catch(err => res.status(404).json(err));
});

router.delete('/api/v1/mascotas/:id', (req, res) => {
  Mascota.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json())
    .catch(err => res.status(404).json(err));
});

module.exports = router;