const db = require('./db-config.js')

module.exports = {
    getIngredients
}

function getIngredients(id) {
    if (id) return db('ingredients').where('id', id);
    else return db('ingredients');
}