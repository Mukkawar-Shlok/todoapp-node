const mongoose = require('mongoose');

const taskList = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }, date: {
        type: String,
        required: true
    }, Category: {
        type: String,
        required: true
    }, CategoryId: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', taskList);

module.exports = Task;