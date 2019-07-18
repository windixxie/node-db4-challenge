
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipes').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipes').insert([
          { id: 1, name: 'Chicken Salad', servings: 1},
          { id: 2, name: 'Chicken Salmonella', servings: 4 },
          { id: 3, name: 'Peanut Butter & Jelly Sandwiches', servings: 1 }
        ]);
      });
  };
  