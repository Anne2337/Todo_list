const express = require('express');
const task= require("./routes/task")

const app = express();

app.use(express.json())

app.use('/', task)

app.listen(3000, () => {
    console.log("app running on port 3000");  
})


