const express = require('express');

const router = express.Router()
const homeController = require('../controllers/homeController');

//entry point
router.get('/', homeController.home);
//tasks for loading
router.get('/tasks', homeController.getTasks);
//category route
router.use('/Category', require('./categoryRoutes'));
//task schedule route
router.use('/Schedule', require('./scheduleRoutes'));

module.exports = router;