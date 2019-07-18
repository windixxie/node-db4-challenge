
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipe_ingredients').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipe_ingredients').insert([
          { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 4, measurement: 'oz' },
          { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 2, measurement: 'tbsp' },
          { id: 3, recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: 'tbsp' },
          { id: 4, recipe_id: 1, ingredient_id: 4, quantity: 1, measurement: 'dash' },
          { id: 5, recipe_id: 1, ingredient_id: 5, quantity: 1, measurement: 'dash' },
          { id: 6, recipe_id: 2, ingredient_id: 6, quantity: 2, measurement: 'tbsp' },
          { id: 7, recipe_id: 2, ingredient_id: 7, quantity: 2, measurement: 'tbsp' },
          { id: 8, recipe_id: 2, ingredient_id: 8, quantity: 2, measurement: 'slices' },
          { id: 9, recipe_id: 3, ingredient_id: 1, quantity: 16, measurement: 'oz' }
        ]);
      });
  };
  