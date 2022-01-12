exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, name: "Nisanthan", email: "n@sentry.io" },
        { id: 2, name: "Jay", email: "j@sentry.io" },
        { id: 3, name: "Sara", email: "s@sentry.io" },
      ]);
    });
};
