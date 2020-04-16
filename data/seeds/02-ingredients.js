
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'carrots'},
        {name: 'zucchini'},
        {name: 'squash'},
        {name: 'onion'},
        {name: 'yellow bell pepper'},
        {name: 'red bell pepper'},
        {name: 'cup olive oil'},
        {name: 'lbs penne pasta'},
        {name: 'halved cherry tomato'},
        {name: 'cup grated parmesan'}
      ]);
    });
};
