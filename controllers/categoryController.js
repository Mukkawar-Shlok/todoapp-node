const Category = require('../models/category');
//home controller
module.exports.home = function (req, res) {
    Category.find().then((responseCategory) => {
        return res.render('category', {
            title: "Category Home",
            category: responseCategory
        });
    }).catch((err) => {
        console.log('Failed to fetch category ', err);
        return res.status(500).json({ error: 'Failed to fetch category' });
    })
};

//controller for creating category
module.exports.create = function (req, res) {
    console.log(req.body);
    Category.create({
        name: req.body.name
    }).then((response) => {
        console.log('Created category', response);
        return res.redirect('back');
    })
        .catch((err) => {
            console.log(`Error occured while creating category${err}`);
            return res.status(500).json({ error: 'Failed to create category' });
        })
};

//controller for deleting Category
module.exports.delete = function (req, res) {
    console.log(req.body.id);
    const id = req.body.id;
    Category.findByIdAndRemove(id)
        .then((response) => {
            console.log('Deleted category', response);
            return res.redirect('back');
        })
        .catch((err) => {
            console.log('Error occured while Deletind category');
            return res.status(500).json({ error: 'Failed to delete category' });
        })
}