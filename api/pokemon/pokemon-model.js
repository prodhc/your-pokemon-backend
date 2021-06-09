const db = require('../../data/db-config')

const getAll = () => {
  return db('pokemon')
}

const getById = (id) => {
  return db('pokemon').where('id', id).first()
}

// const getByVin = (pokemon) => {
//   return db('cars').where('vin', vin).first()
// }

const create = (poke) => {
  return db('pokemon').insert(poke).then(([id]) => {
    return getById(id)
  })
}

module.exports = {
  getAll,
  getById,
  create,
}
