const Task = require('../models/task');
//home
module.exports.home = function (req, res) {
    return res.render('test', {
        title: "Home"
    });
};

//to create tasks 
module.exports.create = async function (req, res) {
    try {
        const name = req.body.name;
        const date = req.body.date;
        const category = req.body.category;
        const categoryId = req.body.categoryId;

        const response = await Task.create({
            description: name,
            date: date,
            Category: category,
            CategoryId: categoryId
        });

        console.log('Created task', response);
        res.status(200).json({ success: 'created task' });
    } catch (err) {
        console.log(`Failed to create Task: ${err}`);
        res.status(500).json({ error: 'Failed to create Task' });
    }
};


//to delete tasks
module.exports.delete = function (req, res) {
    const id = req.body.id;
    console.log(req.body);
    Task.findByIdAndRemove(id).then((response) => {
        console.log('deleted task', response);
        return res.redirect('back');
    }).catch((err) => {
        console.log(`Failed to delete Task${err}`);
        return res.status(500).json({ error: 'Failed to delete Task' });
    });
};