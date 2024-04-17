require('dotenv').config()

const express = require('express')
const coasterRoutes = require('./routes/coasters')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/coasters', coasterRoutes)

// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})