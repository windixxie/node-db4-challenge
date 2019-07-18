
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
  
        tbl
          .string('name', 64)
          .notNullable();
        
        tbl
          .integer('servings')
          .unsigned()
          .notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('recipes');
  };
  