const getAllTasks = (req,res) =>{
    res.send('get all tasks')
}

const createTask = (req,res) =>{
    // res.send('create task')
    res.json(req.body)//for postman testing
}
const getTask = (req,res) =>{
    // res.send('get a task')
    res.json({id:req.params.id})
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