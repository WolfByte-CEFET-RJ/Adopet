exports.up = function (knex) {
    return knex.schema.createTable('chat', function (table) {
        table.string('message'),
        table.string('sender'),
        table.timestamp('timestamp').defaultTo(knex.fn.now())
    }) 
}

exports.down = (knex) => {
    return knex.schema.dropTable('chat')
}