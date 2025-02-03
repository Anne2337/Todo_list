const  express = require('express');
const { createTask, getAllTasks, getSingleTask, updateTask, deleteTask, updateStatusTask } = require("../controllers/task")

const router =express.Router();

 router.post('/', createTask)
 router.get('/', getAllTasks)
 router.get('/:id', getSingleTask)
 router.put('/:id', updateTask)
 router.delete('/:id', deleteTask)
 router.put('/status/:id', updateStatusTask)

 module.exports = router