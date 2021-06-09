const express = require('express')
const Pokemon = require('./pokemon-model')
const router = express.Router()
const {
     checkPokemonId,
     checkPokemonPayload,
} = require('./pokemon-middleware')

router.get('/',  async (req, res, next) => {
    try {
        const pokemon = await Pokemon.getAll()
        res.json(pokemon)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkPokemonId, async (req, res, next) => {
    res.json(req.pokemon)
})


router.post('/', checkPokemonPayload, async (req, res, next) => {
    try {
        const pokemon = await Pokemon.create(req.body)
        res.json(pokemon)
    } catch (err) {
        next(err)
    }
})

module.exports = router