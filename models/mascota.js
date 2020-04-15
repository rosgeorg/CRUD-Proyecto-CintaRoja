const mongoose = require('mongoose');

// Schemas

const MascotaSchema = new mongoose.Schema({
    Foto: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    Especie: {
        type: String,
        required: true,
    },
    Rasgos: {
        type: String,
        required: true,
    },
    Fecha: {
        type: Date,
    },
    Zona: {
        type: String,
    }
},{
  timestamps: true,
});

const Mascota = mongoose.model('Mascota', MascotaSchema);

module.exports = Mascota;