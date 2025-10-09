const express = require('express');
const app = express();
const tasks = require('./routes/tasks')


//middleware
app.use(express.json())

//routes
app.get('/', (req,res) =>{
    res.send("Task Manager");
})
app.use('/api/v1/tasks',tasks)

// on the server, we can have different routes
// Not just the ones for the API - hence we mention /api here

//if we make any changes in any api -> we can update that to v2

// app.get('api/v1/tasks')         //- get all the tasks
// app.post('api/v1/tasks')        //- create a new task
// app.get('api/v1/tasks/:id')     //- get a single task
// app.patch('api/v1/tasks/:id')   //- update a task
// app.delete('api/v1/tasks/:d')   //- delete task

const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}`));
