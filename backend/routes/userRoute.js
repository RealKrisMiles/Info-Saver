const express = require('express')
const User = require('../models/userModel')
const router = express.Router()


//create 
router.post("/",async(req,res)=>{
    const {name,email,age}= req.body
    try {
        const userData = await User.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).json(userData)
    } catch (error) {
        res.send(400).json({error:error.mesaage})
    }
})
//get

router.get('/', async(req, res) => {
  
  try {
    const showAll = await User.find()
    res.status(200).json(showAll)
} catch (error) {
    
    res.send(500).json({error:error.mesaage})
}
})
//delete
router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    
    try {
      const deleteOne = await User.findByIdAndDelete({_id:id})
      res.status(200).json(deleteOne)
  } catch (error) {
      
      res.status(500).json({error:error.mesaage})
  }
  })
//create one 
router.get('/:id', async(req, res) => {
    const {id} = req.params
    
    try {
      const showOne = await User.findById({_id:id})
      res.status(200).json(showOne)
  } catch (error) {
      
    res.status(500).json({error:error.mesaage})
  }
  })
  //update oparetion
  router.patch('/:id',async(req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body;
    try {
        const updateOne = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateOne)
    } catch (error) {
        
        res.status(500).json({error:error.mesaage})
    }
  })

module.exports = router