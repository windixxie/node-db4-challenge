
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('instructions').del()
      .then(function () {
        // Inserts seed entries
        return knex('instructions').insert([
          { id: 1, recipe_id: 1, step_number: 1, step_details: 'Chop cooked chicken into cubes and place in bowl' },
          { id: 2, recipe_id: 1, step_number: 2, step_details: 'Stir in mayonaisse, using more or less for desired richness' },
          { id: 3, recipe_id: 1, step_number: 3, step_details: 'Stir in pickles' },
          { id: 4, recipe_id: 1, step_number: 4, step_details: 'Add salt and pepper to taste' },
          { id: 5, recipe_id: 2, step_number: 1, step_details: 'Spread peanut butter on one slice of bread' },
          { id: 6, recipe_id: 2, step_number: 2, step_details: 'Spread jelly on the other slice' },
          { id: 7, recipe_id: 2, step_number: 3, step_details: 'Put them together with the peanut butter & jelly in the middle' },
          { id: 8, recipe_id: 3, step_number: 1, step_details: 'Let uncooked chicken sit in the sun for 2 hours' },
          { id: 9, recipe_id: 3, step_number: 2, step_details: 'Eat chicken' },
          { id: 10, recipe_id: 3, step_number: 3, step_details: 'Go to the hospital at first sign of intestinal distress' }
        ]);
      });
  };
  