exports.up = function(knex) {
  return knex.schema
    .createTable("games", table => {
      table.increments();
      table
        .integer("id")
        .notNullable()
        .unique();
    })
    .createTable("cards", table => {
      table.increments();
      table
        .integer("game_id")
        .references("id")
        .inTable("games");
      table.string("word", 128).notNullable();
      table.integer("index").notNullable();
      table.string("type", 128).notNullable();
      table.boolean("found").notNullable();
    })
    .createTable("clues", table => {
      table.increments();
      table.string("clue", 128).notNullable();
      table.integer("amount").notNullable();
      table.string("team", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("games")
    .dropTableIfExists("cards")
    .dropTableIfExists("clues");
};
