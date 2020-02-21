
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Chef Portfolio', completed: false},
        {id: 2, name: 'Weather App', completed: false},
        {id: 3, name: 'Anywhere Fitness', completed: false}
      ]);
    });
};
