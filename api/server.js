const express = require("express")
const cors = require('cors')
const pokemonRouter = require('./pokemon/pokemon-router')
const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/pokemon', pokemonRouter)

server.use('e', (req, res) => {
    res.send(`<h1>Hello There</h1>`)
})

server.use('*', (req, res, next) => {
    next({ status: 404, message: "uhhhhh"})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
