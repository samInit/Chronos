const getAllTasks = (req,res) =>{
    res.send('get all tasks')
}

const createTask = (req,res) =>{
    res.send('create task')
}
const getTask = (req,res) =>{
    res.send('get a task')
}
const updateTask = (req,res) =>{
    res.send('update a task')
}
const deleteTask = (req,res) =>{
    res.send('delete a task')
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}