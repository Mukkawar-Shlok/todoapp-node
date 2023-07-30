const express = require('express');

const router = express.Router()
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/tasks', homeController.getTasks);
router.use('/Category', require('./categoryRoutes'));
router.use('/Schedule', require('./scheduleRoutes'));

module.exports = router;