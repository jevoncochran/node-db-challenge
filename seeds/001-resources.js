
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Youtube'},
        {id: 2, name: 'Lambda School Training Kit'},
        {id: 3, name: 'Javascript for Beginners book'}
      ]);
    });
};
