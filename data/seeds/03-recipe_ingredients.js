
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {quantity: 3, recipe_id: 1, ingredients_id: 1},
        {quantity: 2, recipe_id: 1, ingredients_id: 2},
        {quantity: 2, recipe_id: 1, ingredients_id: 3},
        {quantity: 1, recipe_id: 1, ingredients_id: 4},
        {quantity: 1, recipe_id: 1, ingredients_id: 5},
        {quantity: 1, recipe_id: 1, ingredients_id: 6},
        {quantity: 0.25, recipe_id: 1, ingredients_id: 7},
        {quantity: 1, recipe_id: 1, ingredients_id: 8},
        {quantity: 15, recipe_id: 1, ingredients_id: 9},
        {quantity: .5, recipe_id: 1, ingredients_id: 10},
      ]);
    });
};
