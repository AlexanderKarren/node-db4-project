const db = require('./db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
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
        .select('ingredients.id', 'recipe_ingredients.quantity', 'ingredients.name');
}

function getInstructions(id) {
    return db('recipes')
        .where('recipes.id', id)
        .join('instructions', 'recipes.id', 'instructions.recipe_id')
        .select('recipes.name as recipe_name', 'instructions.id', 'instructions.step', 'instructions.name as instruction')
        .orderBy('step');
}