const  express = require('express');
const {taskcreate} = require("../controllers/examples")

const router =express.Router();

 router.post('/create',taskcreate)
 

 module.exports = router