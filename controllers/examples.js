const taskcreate = (req,res) =>{
    console.log(req.body)
    const {taskname} =(req,res)
  res.status(200).json({message:'task created sucesufully!!!!'})
}




module.exports = {taskcreate}