exports.up = function(knex) {
  return knex.schema
    .createTable('class', classes => {
        classes.increments('class_id')
        classes.string('class_name', 52).notNullable().unique()
    })
};

exports.down = function(knex) {
  return knex.schema
};
