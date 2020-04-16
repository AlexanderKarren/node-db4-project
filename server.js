const express = require('express');

const recipeRouter = require('./data/recipeRouter.js');
const ingredientsRouter = require('./data/ingredientsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

server.get("/", (req, res) => {
    res.send(`<h1>It's up</h1>`)
})

module.exports = server;