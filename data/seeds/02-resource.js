
exports.seed = function(knex) {
  
  return knex('resource').insert([
    {name: 'volts-RP', description: 'Resource description for volts-RP'},
    {name: 'modded-RP', description: 'Resource description for modded-RP'},
    {name: 'vanilla-RP', description: 'Resource description for vanilla-RP'}
  ]);
};