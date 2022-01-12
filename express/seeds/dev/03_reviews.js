exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          productid: 1,
          rating: 5,
          customerid: 1,
          description: "Great!",
        },
        {
          id: 2,
          productid: 1,
          rating: 4,
          customerid: 2,
          description: null,
        },
        {
          id: 3,
          productid: 1,
          rating: 3,
          customerid: 3,
          description: null,
        },
        {
          id: 4,
          productid: 2,
          rating: 4,
          customerid: 1,
          description: null,
        },
        {
          id: 5,
          productid: 2,
          rating: 3,
          customerid: 2,
          description: null,
        },
        {
          id: 6,
          productid: 2,
          rating: 2,
          customerid: 3,
          description: null,
        },
        {
          id: 7,
          productid: 3,
          rating: 3,
          customerid: 1,
          description: null,
        },
        {
          id: 8,
          productid: 3,
          rating: 3,
          customerid: 2,
          description: null,
        },
        {
          id: 9,
          productid: 3,
          rating: 3,
          customerid: 3,
          description: null,
        },
        {
          id: 10,
          productid: 4,
          rating: 3,
          customerid: 3,
          description: null,
        },
        {
          id: 11,
          productid: 4,
          rating: 3,
          customerid: 1,
          description: null,
        },
        {
          id: 12,
          productid: 4,
          rating: 3,
          customerid: 2,
          description: null,
        },
      ]);
    });
};

