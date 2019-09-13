
exports.seed = function(knex) {
  
  return knex('task').insert([
        {description: 'Volts description of what needs to be done.', AddedInfo: 'This can be whatever you want to put here...', completed: false},
        {description: 'Modded description of what needs to be done.', AddedInfo: 'This can be whatever you want to put here...', completed: false},
        {description: 'Vanilla description of what needs to be done.', AddedInfo: 'This can be whatever you want to put here...', completed: false}
      ]);
};