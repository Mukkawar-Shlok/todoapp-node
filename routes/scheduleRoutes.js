const express = require('express');

const router = express();

const scheduleController = require('../controllers/scheduleController');

router.get('/', scheduleController.home);
router.post('/', scheduleController.create);
router.post('/delete', scheduleController.delete);
module.exports = router;