exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
      table.string('id').primary(),
      table.string('imagem'),
      table.string('fullName', 60).notNullable(),
      table.string('email', 100).notNullable(),
      table.string('hash_password').notNullable(),
      table.string('cpf').notNullable(),
      table.timestamp('created').defaultTo(knex.fn.now()),
      table.string('reset_password_token'),
      table.timestamp('reset_password_expires')
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
