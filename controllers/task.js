const tasksArray = [
    {
        id: "65a9f1c5b4d1a2e3f4g5h6i7",
        name: "Go to the mosque",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h6i8",
        name: "Read a book",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h6i9",
        name: "Exercise for 30 minutes",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h710",
        name: "Write a journal entry",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h711",
        name: "Complete a coding challenge",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h712",
        name: "Call a family member",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h713",
        name: "Cook a healthy meal",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h714",
        name: "Meditate for 10 minutes",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h715",
        name: "Review today's tasks",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h716",
        name: "Plan tomorrow’s schedule",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h717",
        name: "Watch an educational video",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h718",
        name: "Practice a new language",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h719",
        name: "Go for a walk",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h720",
        name: "Listen to a podcast",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h721",
        name: "Clean the workspace",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h722",
        name: "Write a blog post",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h723",
        name: "Organize files",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h724",
        name: "Read news updates",
        isCompleted: false
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h725",
        name: "Drink enough water",
        isCompleted: true
    },
    {
        id: "65a9f1c5b4d1a2e3f4g5h726",
        name: "Stretch for 5 minutes",
        isCompleted: false
    }
];

const createTask = (req, res) => {
    const { id, name, isCompleted } = req.body;

    // Validate input
    if (!name || !isCompleted || !id) {
        return res.status(400).json({ success: false, message: "Name  , id  and isCompleted are required" });
    }

    // Create a new task object
    const newTask = {
        id,  
        name,
        isCompleted
    };

    
    tasksArray.push(newTask);

    // Return the created task
    res.status(201).json({
        success: true,
        message: "Task created successfully",
        task: newTask
    });
}


const getAllTasks = (req, res) => {

    res.status(200).json({success:true, message: "tasks retrieved successfully", tasks:tasksArray})
}


const getSingleTask = (req, res) => {

    const { id } = req.params;

    const task = tasksArray.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, task });
}


const updateTask = (req, res) => {
    const { id } = req.params;
    const { name, isCompleted } = req.body;

    // Find the task by ID
    const task = tasksArray.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({ success: false, message: "Task not found" });
    }

    if (name !== undefined) task.name = name;
    if (isCompleted !== undefined) task.isCompleted = isCompleted;

    res.status(200).json({ 
        success: true, 
        message: "Task updated successfully",
        updatedTask: task
    });
};



const deleteTask = (req, res) => {
    const { id } = req.params;
    const task = tasksArray.find(task => task.id === id);
    
    if (!task) {
        return res.status(404).json({ success: false, message: "Task not found" });
    }

    
    res.status(200).json({success:true, message: "Task deleted successfully", task})
}


const updateStatusTask = (req, res) => {
    const { id } = req.params;

    const task = tasksArray.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({ success: false, message: "Task not found" });
    }

    task.isCompleted = !task.isCompleted;

    res.status(200).json({
        success: true,
        message: "Task Status Updated successfully",
        task
    });
};


module.exports = {
    createTask,
    getAllTasks,
    getSingleTask,
    updateTask,
    deleteTask,
    updateStatusTask
}

