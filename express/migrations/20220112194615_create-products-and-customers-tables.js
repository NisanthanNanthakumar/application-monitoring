exports.up = function (knex) {
  return knex.schema
    .createTable("products", function (table) {
      table.increments().primary();
      table.string("title", 255).notNullable();
      table.text("description").notNullable();
      table.text("descriptionfull").notNullable();
      table.text("img").notNullable();
      table.text("imgcropped").notNullable();
      table.integer("price").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("customers", function (table) {
      table.increments().primary();
      table.string("name", 255).notNullable();
      table.string("email", 255).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts").dropTable('customers');
};
