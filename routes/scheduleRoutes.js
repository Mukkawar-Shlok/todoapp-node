const express = require('express');

const router = express();

const scheduleController = require('../controllers/scheduleController');

//to load home 
router.get('/', scheduleController.home);
//to create task
router.post('/', scheduleController.create);
//to delete task
router.post('/delete', scheduleController.delete);
module.exports = router;