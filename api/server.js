const express = require("express")
const pokemonRouter = require('./pokemon/pokemon-router')
const server = express()

server.use(express.json())

server.use('/api/pokemon', pokemonRouter)

server.use('*', (req, res, next) => {
    next({ status: 404, message: "uhhhhh"})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

// DO YOUR MAGIC

module.exports = server
