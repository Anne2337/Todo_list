const  express = require('express');
const { createTask, getAllTasks, getSingleTask, updateTask, deleteTask, updateStatusTask } = require("../controllers/task")

const router =express.Router();

 router.post('/', createTask)
 router.get('/', getAllTasks)
 router.get('/:id', getSingleTask)
 router.put('/', updateTask)
 router.delete('/', deleteTask)
 router.put('/status', updateStatusTask)

 module.exports = router