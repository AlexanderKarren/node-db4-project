
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {name: 'Preheat the oven to 450 degrees F.', step: 1, recipe_id: 1},
        {name: 'On a large heavy baking sheet, toss all of the vegetables with the oil, salt, pepper, and dried herbs to coat. Transfer half of the vegetable mixture to another heavy large baking sheet and arrange evenly over the baking sheets. Bake until the carrots are tender and the vegetables begin to brown, stirring after the first 10 minutes, about 20 minutes total.', step: 2, recipe_id: 1},
        {name: 'Meanwhile, cook the pasta in a large pot of boiling salted water until al dente, tender but still firm to the bite, about 8 minutes. Drain, reserving 1 cup of the cooking liquid.', step: 3, recipe_id: 1},
        {name: 'Toss the pasta with the vegetable mixtures in a large bowl to combine. Toss with the cherry tomatoes and enough reserved cooking liquid to moisten. Season the pasta with salt and pepper, to taste. Sprinkle with the Parmesan and serve immediately.', step: 4, recipe_id: 1},
      ]);
    });
};
