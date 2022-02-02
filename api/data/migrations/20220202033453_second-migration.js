exports.up = function(knex) {
  return knex.schema
    .createTable('class', classes => {
        classes.increments('class_id')
        classes.string('class_name', 52).notNullable().unique()
        classes.string('class_type',32).notNullable()
        classes.string('class_duration').notNullable()
        classes.string('class_intensity').notNullable()
        classes.string('class_location').notNullable()
        classes.time('start_time').notNullable()
        classes.date('class_date').notNullable()
        classes.integer('class_size').notNullable()        
        classes.integer("user_id").notNullable()
          .unsigned()
          .notNullable()
          .references("user_id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE")             
    })
    .createTable("classes_attendees", classes_attendees => {
        classes_attendees.increments("class_attendee_id")
        classes_attendees.integer("class_id").notNullable()
          .unsigned()
          .notNullable()
          .references("class_id")
          .inTable("class")
          .onUpdate("CASCADE")
          .onDelete("CASCADE")
        classes_attendees.integer("user_id").notNullable()
          .unsigned()
          .notNullable()
          .references("user_id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE")      
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('classes_instructors')
  .dropTableIfExists('classes_attendees')
  .dropTableIfExists('class')
};
