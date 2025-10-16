const Task = require('../models/Task')

const getAllTasks = (req,res) =>{
    res.send('get all tasks')
}

const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg: error});
    }
    // res.send('create task')
    // res.json(req.body)//for postman testing
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