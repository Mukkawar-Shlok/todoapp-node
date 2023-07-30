const mongoose = require('mongoose');

const CategoryList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('Category', CategoryList);

module.exports = Category;