const Pokemon = require('./pokemon-model')


const checkPokemonId = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.getById(req.params.id)
    if (!pokemon) {
      next({ status: 404, message: 'not found'})
    } else {
      req.pokemon = pokemon
      next()
    }
} catch (err) {
    next(err)
}
}

const checkPokemonPayload = (req, res, next) => {
  if (!req.body.customName) return next({
    status: 400,
    message: `custom name is missing`,
  })
  if (!req.body.pokemonName) return next({
    status: 400,
    message: `pokemon name is missing`,
  })
  if (!req.body.type) return next({
    status: 400,
    message: `pokemon type is missing is missing`,
  })
  if (!req.body.level) return next({
    status: 400,
    message: `level is missing`,
  })
  next()
}

// const checkVinNumberValid = (req, res, next) => {
//   if(vin.validate(req.body.vin)) {
//     next()
//   } else {
//     next( { status: 400, message: `vin ${req.body.vin} is invalid`})
//   }
// }

// const checkVinNumberUnique = async (req, res, next) => {
//   try {
//     const existing = await Car.getByVin(req.body.vin)
//     if (!existing) {
//       next()
//     } else {
//       next({ status: 400, message: `vin ${req.body.vin} already exists`})
//     }
//   } catch (err) {
//     next(err)
//   }
// }

module.exports = {
  checkPokemonId,
  checkPokemonPayload,
}
