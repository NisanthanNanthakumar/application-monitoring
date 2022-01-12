exports.up = function (knex) {
  return knex.schema.createTable("reviews", function (table) {
    table.increments().primary();
    table.text("description").nullable();
    table.integer("rating").notNullable();
    table.integer("productid").references("id").inTable("posts");
    table.integer("customerid").references("id").inTable("customers")
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
};
