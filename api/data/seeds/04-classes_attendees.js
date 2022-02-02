exports.seed = function(knex, Promise) {
  return knex('classes_attendees').insert([   
    {  class_id: 1, user_id: 4,},
    {  class_id: 1, user_id: 5,},
    {  class_id: 1, user_id: 6,},
    {  class_id: 2, user_id: 4,},
    {  class_id: 2, user_id: 5,},
    {  class_id: 3, user_id: 4,},
    {  class_id: 4, user_id: 4,},
    {  class_id: 4, user_id: 5,},    
    {  class_id: 4, user_id: 5,}    
  ]);
};
