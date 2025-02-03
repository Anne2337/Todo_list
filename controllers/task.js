const createTask = (req, res) => {
    res.status(200).json({message: "createTask loaded successfully"})
}


const getAllTasks = (req, res) => {
    res.status(200).json({message: "getAllTasks loaded successfully"})
}


const getSingleTask = (req, res) => {
    res.status(200).json({message: "getSingleTask loaded successfully"})
}


const updateTask = (req, res) => {
    res.status(200).json({message: "updateTask loaded successfully"})
}


const deleteTask = (req, res) => {
    res.status(200).json({message: "deleteTask loaded successfully"})
}


const updateStatusTask = (req, res) => {
    res.status(200).json({message: "updateStatusTask loaded successfully"})
}

module.exports = {
    createTask,
    getAllTasks,
    getSingleTask,
    updateTask,
    deleteTask,
    updateStatusTask
}

