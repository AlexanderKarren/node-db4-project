const db = require('./db-config.js')

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes(id) {
    if (id) return db('recipes').where('id', id);
    else return db('recipes');
}

function getShoppingList(id) {
    return db('recipes')
        .where('recipes.id', id)
        .join('recipe_ingredients', 'recipe_ingredients.recipe_id', `recipes.id`)
        .join('ingredients', 'ingredients.id', `recipe_ingredients.ingredients_id`)
        .select('ingredients.id', 'ingredients.name', 'recipe_ingredients.quantity');
}