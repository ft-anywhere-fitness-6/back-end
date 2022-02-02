const db = require('../data/db-config');

async function findAll() {  
/*
SELECT 
    class_name as Name, 
    class_type as Type, 
    start_time, 
    class_duration, 
    class_intensity, 
    class_location, 
    
    class_size as "Max class size",
    
FROM class as c
JOIN users as u
  ON u.user_id = c.user_id
*/
    const classes = await db('class as c')
        .join('users as u', 'u.user_id', 'c.user_id')
        .select (
            'c.class_id',
            'class_name as Name', 
            'class_type as Type', 
            'start_time as Start time', 
            'class_duration as Duration', 
            'class_intensity as Intensity level', 
            'class_location as Location',     
            'class_size as Max class size'               
        )

    const attendees = await db('classes_attendees as cs')
        .select('cs.class_id')
        .count('cs.class_attendee_id', { as: 'number_registered' })
        .groupBy('cs.class_id')  

    let result = classes.map((cl) => ({
        ...cl,
        ...attendees.find((reg) => reg.class_id === cl.class_id),
          }));    

    result.forEach((cl) =>
        cl.number_registered
        ? (cl.number_registered = parseInt(cl.number_registered))
        : (cl.number_registered = 0)
        )    

    return result
}

async function findById(class_id) {
  

  return null;
}

async function findAttending(user_id) {
  
  return null;
}

async function findTeaching(user_id) {
  
  return null;
}

async function add(clss) {
  
  return null;
}

async function signup({ user_id, class_id }) {
  
  return null;
}

async function update(class_id, changes) {
  return null
}

async function removeClass(class_id){
  return null
}

module.exports = {
  findAll,
  findById,
  findAttending,
  add,
  findTeaching,
  signup,
  update,
 
};