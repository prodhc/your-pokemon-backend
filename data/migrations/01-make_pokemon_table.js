
exports.up = function(knex) {
    return knex.schema.createTable('pokemon', tbl => {
        tbl.increments()

        tbl.string('customName', 25).notNullable()

        tbl.string('pokemonName', 25).notNullable()

        tbl.string('type', 100).notNullable()

        tbl.integer('level').unsigned().notNullable()

    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pokemon')
}