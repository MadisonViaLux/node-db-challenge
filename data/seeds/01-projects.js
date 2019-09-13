
exports.seed = function(knex) {

  return knex('projects').insert([
        {name: 'volts', description: 'one long description', completed: false},
        {name: 'modded', description: 'two very long descriptions', completed: false},
        {name: 'vanilla', description: 'three more very very long descriptions about nothing', completed: false}
      ]);
};
