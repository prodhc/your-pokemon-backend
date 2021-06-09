const pokemon = [
    {
        customName: 'Nicky',
        pokemonName: "Pikachu",
        type: "electric",
        level: 15,
    },
    {
        customName: 'Harry',
        pokemonName: "Charmander",
        type: "fire",
        level: 2,
    }
    ]
    
    exports.seed = function(knex) {
        return knex('pokemon').truncate().then(() => {
            return knex('pokemon').insert(pokemon)
        })
    }