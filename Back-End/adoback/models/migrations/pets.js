exports.up = (knex) => {
    return knex.schema.createTable('pets', (table) => {
        table.string('id').primary(),
        table.json('localização').notNullable(),
        table.string('id_doador').notNullable(),
        table.json('imagem'),
        table.string('nome', 60).notNullable(),
        table.string('tipo', 60).notNullable(),
        table.string('sexo', 5).notNullable(),
        table.integer('idade'),
        table.string('tamanho', 20),
        table.float('peso'),
        table.text('vacinação'),
        table.boolean('Treinado').notNullable(),
        table.boolean('castrado').notNullable(),
        table.boolean('vermifugado').notNullable(),
        table.boolean('chipado').notNullable(),
        table.text('caracteristicas')
        table.timestamp('created').defaultTo(knex.fn.now())
        table.boolean('adotado').defaultTo(0)
    })
}

exports.down = (knex) => {
    return knex.schema.dropTable('pets')
}