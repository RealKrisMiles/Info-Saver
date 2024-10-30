const express = require('express')
const User = require('../models/userModel')
const router = express.Router()

// Create
router.post("/", async (req, res) => {
    const { name, email, age } = req.body
    try {
        const userData = await User.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).json(userData)
    } catch (error) {
        res.status(400).json({ error: error.message })  // Corrected error.message
    }
})

// Get all users
router.get('/', async (req, res) => {
    try {
        const showAll = await User.find()
        res.status(200).json(showAll)
    } catch (error) {
        res.status(500).json({ error: error.message })  // Corrected error.message
    }
})

// Delete user by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteOne = await User.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteOne)
    } catch (error) {
        res.status(500).json({ error: error.message })  // Corrected error.message
    }
})

// Get single uaser by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const showOne = await User.findById({ _id: id })
        res.status(200).json(showOne)
    } catch (error) {
        res.status(500).json({ error: error.message })  // Corrected error.message
    }
})

// Update user by ID
router.patch('/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body
    try {
        const updateOne = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateOne)
    } catch (error) {
        res.status(500).json({ error: error.message })  // Corrected error.message
    }
})

module.exports = router
