exports.up = function(knex) {
  return knex.schema
    .createTable('class', classes => {
        classes.increments('class_id')
        classes.string('class_name', 52).notNullable().unique()
        classes.string('class_type',32).notNullable()
        classes.string('class_duration').notNullable()
        classes.string('class_intensity').notNullable()
        classes.string('class_location').notNullable()
        classes.time('start_time')
        classes.date('class_date')
        classes.integer('class_size')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('class')
};
