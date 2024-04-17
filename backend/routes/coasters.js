const express = require('express')

const router = express.Router()

// GET ALL coasters
router.get('/', (req, res) => {
    res.json({msg: 'GET all coasters'})
})

// GET a single coaster
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single coaster'})
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({msg: 'POST a new coaster'})
})

// DELETE a coaster
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
})

// UPDATE a coaster
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a coaster'})
})

module.exports = router