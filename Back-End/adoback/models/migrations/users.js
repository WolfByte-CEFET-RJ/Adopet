exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
      table.string('id').primary(),
      table.string('type').defaultTo('user'),
      table.string('img_profile'),
      table.string('fullName', 60).notNullable(),
      table.string('email', 60).notNullable(),
      table.string('hash_password').notNullable(),
      table.string('phone', 13).notNullable(),
      table.string('local', 60).notNullable(),
      table.string('local_coords').notNullable(),
      table.string('about'),
      table.timestamp('created').defaultTo(knex.fn.now()),
      table.string('reset_password_token'),
      table.timestamp('reset_password_expires')
    })
};

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
