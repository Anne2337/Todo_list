const express = require('express');
const exampleRoutes = require("./routes/examples")

const app = express();

app.use(express.json())

app.use('/', exampleRoutes)

app.listen(3000, () => {
    console.log("app running on port 3000");  
})