const db = require('../data/db-config');

async function findAll() {  

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

    const foundClass = await db('class as c')
        .join('users as u', 'u.user_id', 'c.user_id')
        .select (
            'c.class_id',
            'class_name as Name', 
            'class_type as Type', 
            'class_date as Date', 
            'start_time as Start time', 
            'class_duration as Duration', 
            'class_intensity as Intensity level',
            'u.username as instructor', 
            'class_location as Location',     
            'class_size as Max class size'               
        )
        .where('c.class_id', class_id)

    const attendees = await db('classes_attendees as cs')
        .select('cs.class_id')
        .count('cs.class_attendee_id', { as: 'number_registered' })
        .groupBy('cs.class_id') 
        .where('cs.class_id', class_id)

    let result = foundClass.map((cl) => ({
        ...cl,
        ...attendees.find((reg) => reg.class_id === cl.class_id),
          }));    

    result.forEach((cl) =>
        cl.number_registered
        ? (cl.number_registered = parseInt(cl.number_registered))
        : (cl.number_registered = 0)
        )    

    return foundClass
}

async function findAttending(user_id) {
/*
    select  *
    from classes_attendees as cs
    join class as c
        on cs.class_id = c.class_id	
    join users as u
        on cs.user_id = u.user_id	
    where u.user_id = 4
    */
  
    const rows = await db('classes_attendees as cs')
    .join('class as c', 'cs.class_id', 'c.class_id')
    .join('users as u', 'cs.user_id', 'u.user_id')
    .select (
        'c.class_id',
        'class_name as Name', 
        'class_type as Type', 
        'start_time as Start time', 
        'class_duration as Duration', 
        'class_intensity as Intensity level', 
        'class_location as Location',     
        'class_size as Max class size',                      
    )
    .where('u.user_id', user_id);

    return rows
  }

async function findTeaching(user_id) {
/*
select  *
from class as c
join users as u
	on c.user_id = u.user_id
where u.user_id = 2
*/

    const foundClass = await db('class as c')
        .join('users as u', 'u.user_id', 'c.user_id')
        .select (
            'c.class_id',
            'class_name as Name', 
            'class_type as Type', 
            'class_date as Date', 
            'start_time as Start time', 
            'class_duration as Duration', 
            'class_intensity as Intensity level',
            'u.username as instructor', 
            'class_location as Location',     
            'class_size as Max class size'               
        )
        .where('u.user_id', user_id)

    const attendees = await db('classes_attendees as cs')
        .select('cs.class_id')
        .count('cs.class_attendee_id', { as: 'number_registered' })
        .groupBy('cs.class_id') 
        .where('cs.class_id', user_id)

    let result = foundClass.map((cl) => ({
        ...cl,
        ...attendees.find((reg) => reg.class_id === cl.class_id),
          }));    

    result.forEach((cl) =>
        cl.number_registered
        ? (cl.number_registered = parseInt(cl.number_registered))
        : (cl.number_registered = 0)
        )    

    return foundClass
}

async function add( newClass ) {
    const result = await db('class').insert( newClass, ["class_name"] );
    return result
  }

  async function signup({ user_id, class_id }) {
    await db('classes_students').insert({ student_id: user_id, class_id });
    const signup = await findById(class_id);
    return signup;
  }
  

async function update(class_id, changes) {
  return null
}

async function removeClass(class_id){
  return db('class').where({ class_id }).del()
}

module.exports = {
  findAll,
  findById,
  add,
  findAttending,  
  findTeaching,
  signup,
  update,
  removeClass
};