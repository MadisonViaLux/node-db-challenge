
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description')
        tbl.boolean('completed', false)
    })
    .createTable('resource', tbl => {
        tbl.increments()
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description')
    })
    .createTable('task', tbl => {
        tbl.increments()
        tbl.text('description')
            .notNullable()
        tbl.text('Additional Information')
        tbl.boolean('completed', false)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
};
