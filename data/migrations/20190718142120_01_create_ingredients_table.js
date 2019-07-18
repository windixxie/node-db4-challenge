
exports.up = function(knex) {
    return knex.schema
      .createTable('ingredients', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 64)
          .notNullable()
          .unique();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('ingredients');
  };
  