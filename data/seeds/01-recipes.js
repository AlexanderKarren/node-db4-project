
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Pasta Primavera', difficulty: 'Easy', time: '45 min'},
      ]);
    });
};
