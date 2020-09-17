exports.up = (knex) => {
  return knex.schema.createTable('TaskSchema', (table) => {
      table.string('id').primary(),
      table.string('name', 50).notNullable(),
      table.timestamp('created_date').defaultTo(knex.fn.now()),
      table.string('status', 255).defaultTo('pending')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('TaskSchema')
}
