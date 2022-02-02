exports.seed = function (knex) {
  return knex('class').insert([
    {
      class_name: 'Morning Zen',
      class_type: "yoga",
      class_duration: '1 hour',
      class_intensity: 'beginner',
      class_location: 'Central Park',
      start_time: '08:00:00',
      class_date: '2021-11-17',
      class_size: 30,
      user_id: 2         
    },
    {
      class_name: 'Boxing Basics',
      class_type: "boxing",
      class_duration: '45 min',
      class_intensity: 'intermediate',
      class_location: 'YMCA',
      start_time: '09:00:00',
      class_date: '2021-12-07',
      class_size: 30,
      user_id: 3      
    },
    {
      class_name: 'Sunday Spinning',
      class_type: "cycling",
      class_duration: '1.5 hours',
      class_intensity: 'advanced',
      class_location: 'Gym Z',
      start_time: '19:00:00',
      class_date: '2021-11-17',
      class_size: 20,
      user_id: 2      
    },
    {
      class_name: 'Water Aerobics',
      class_type: "swimming",
      class_duration: '2 hours',
      class_intensity: 'advanced',
      class_location: 'Community Pool',
      start_time: '16:45:00',
      class_date: '2022-03-17',
      class_size: 20,
      user_id: 3      
    },
    {
      class_name: 'Bikram Yoga',
      class_type: "yoga",
      class_duration: '45 min',
      class_intensity: 'intermediate',
      class_location: 'Central Park',
      start_time: '18:00:00',
      class_date: '2021-11-17',
      class_size: 20,
      user_id: 3        
    },    
  ]);
};