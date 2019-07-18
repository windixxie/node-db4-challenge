
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ingredients').del()
      .then(function () {
        // Inserts seed entries
        return knex('ingredients').insert([
          { id: 1, name: 'chicken' },
          { id: 2, name: 'mayonaisse' },
          { id: 3, name: 'pickles, diced' },
          { id: 4, name: 'salt' },
          { id: 5, name: 'pepper' },
          { id: 6, name: 'peanut butter' },
          { id: 7, name: 'jelly' },
          { id: 8, name: 'bread, sliced' }
        ]);
      });
  };
  