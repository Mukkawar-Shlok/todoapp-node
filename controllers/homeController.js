const Category = require('../models/category');
const Task = require('../models/task');

module.exports.home = function (req, res) {
    Category.find().then((responseCategory) => {
        return res.render('home', {
            title: "TASK MANAGER",
            category: responseCategory
        });
    }).catch((err) => {
        console.log('Failed to fetch category ', err);
        return res.status(500).json({ error: 'Failed to fetch category' });
    })
};

exports.getTasks = async function (req, res) {
    try {
        const tasks = await Task.find();
        res.status(200).json({ data: tasks });
    } catch (err) {
        res.status(500).json({ message: 'Failed to load data', error: err.message });
    }
};