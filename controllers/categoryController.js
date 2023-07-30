const Category = require('../models/category');

module.exports.Chome = function (req, res) {
    return res.render('test', {
        title: "Home"
    });
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