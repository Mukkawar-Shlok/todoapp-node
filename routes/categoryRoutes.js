const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.home);
router.post('/', categoryController.create);
router.delete('/', categoryController.delete);
module.exports = router;
