const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');

//to load home
router.get('/', categoryController.home);
//to create category
router.post('/', categoryController.create);
//to delete router
router.delete('/', categoryController.delete);
module.exports = router;
