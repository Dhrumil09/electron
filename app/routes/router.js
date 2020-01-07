const express = require('express');
const router = express.Router();

/* API routes */
router.use('/shirt', require('./api/shirt'));
router.use('/trousers', require('./api/trouser'));
router.use('/user', require('./api/user'));
router.use('/suit', require('./api/suit'));
router.use('/kurta', require('./api/kurta'));
router.use('/paijama', require('./api/paijama'));
router.use('/koti', require('./api/koti'));
module.exports = router;