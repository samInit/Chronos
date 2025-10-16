const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Must provide a name for the task'],
        trim:true,
        maxlength:[50, 'Name of the task can not be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema);