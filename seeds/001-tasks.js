
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'create landing page for Chef Portfolio app', completed: false},
        {id: 2, description: 'create sign in and register page for chefs', completed: false},
        {id: 3, description: 'read documentation for Chef Portfolio API', completed: false}
      ]);
    });
};
