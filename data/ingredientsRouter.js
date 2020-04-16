const express = require('express')

const Ingredients = require('./ingredientsModel.js');

const router = express.Router();

router.get("/", (req, res) => {
    Ingredients.getIngredients().then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ error: error.message }))
})

router.get("/:id", (req, res) => {
    Ingredients.getIngredients(req.params.id).then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ error: error.message }))
})

module.exports = router;