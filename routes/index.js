const express = require('express');

const router = express.Router()
const homeController = require('../controllers/homeController');
const userController = require('../controllers/usersController');

//entry point
router.get('/', homeController.home);

//for users
router.get('/sign-up', userController.signup);
router.get('/log-in', userController.login);
router.post('/users/create', userController.create);

//tasks for loading
router.get('/tasks', homeController.getTasks);
//category route
router.use('/Category', require('./categoryRoutes'));
//task schedule route
router.use('/Schedule', require('./scheduleRoutes'));

module.exports = router;