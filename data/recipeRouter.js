const express = require('express')

const Recipes = require('./recipeModel.js');

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes().then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.get("/:id", (req, res) => {
    Recipes.getRecipes(req.params.id).then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.get("/:id/list", (req, res) => {
    Recipes.getShoppingList(req.params.id).then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ error: error.message }))
})

module.exports = router;