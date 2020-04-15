const express = require('express');
const router = express.Router();

const MascotaRoutes = require('./MascotaRoutes');


router.use(MascotaRoutes);

module.exports = router;