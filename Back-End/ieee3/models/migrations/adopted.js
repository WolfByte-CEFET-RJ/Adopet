exports.up = (knex) => {
    return knex.schema.createTable('adopted', (table) => {
        table.string('id').primary(),
        table.string('id_doador').notNullable(),
        table.string('id_pet').notNullable(),
        table.string('id_adotante').notNullable(),
        table.timestamp('created').defaultTo(knex.fn.now())
    })
}

exports.down = (knex) => {
    return knex.schema.dropTable('adopted')
}