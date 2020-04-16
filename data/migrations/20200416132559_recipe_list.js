
exports.up = function(knex) {
  return (
      knex.schema
        .createTable("recipes", table => {
            table.increments("id").primary();
            table.string("name", 255).notNullable().unique();
            table.string("difficulty", 255);
            table.string("time", 255);
        })

        .createTable("instructions", table => {
            table.increments("id").primary();
            table.string("name", 255).notNullable().unique();
            table.integer("step").notNullable();

            table
            .integer("recipe_id")
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
            .onUpdate("CASCADE");

            table.unique(["recipe_id", "step"]);
        })

        .createTable("ingredients", table => {
            table.increments("id").primary();
            table.string("name", 255).notNullable().unique();
        })

        .createTable("recipe_ingredients", table => {
            table.increments("id").primary();
            table.decimal("quantity").notNullable();

            table
                .integer("recipe_id")
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("CASCADE") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
                .onUpdate("CASCADE");
  
            table
                .integer("ingredients_id")
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("CASCADE") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
                .onUpdate("CASCADE");

            table.unique(["recipe_id", "ingredients_id"]);
        })
  )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
};
