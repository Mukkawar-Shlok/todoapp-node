const mongoose = require('mongoose');

//schema for Category
const CategoryList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('Category', CategoryList);

module.exports = Category;