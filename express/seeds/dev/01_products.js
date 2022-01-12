exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          title: "Plant Mood",
          description: "The mood ring for plants.",
          descriptionfull:
            "This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. I'm a water fanatic. I love water. There's not a thing in the world wrong with washing your brush. Everybody needs a friend. Here we're limited by the time we have.",
          price: 155,
          img: "https://storage.googleapis.com/application-monitoring/mood-planter.jpg",
          imgcropped:
            "https://storage.googleapis.com/application-monitoring/mood-planter-cropped.jpg",
        },
        {
          id: 2,
          title: "Botana Voice",
          description: "Lets plants speak for themselves.",
          descriptionfull:
            "Now we don't want him to get lonely, so we'll give him a little friend. Let your imagination just wonder around when you're doing these things. Let your imagination be your guide. Nature is so fantastic, enjoy it. Let it make you happy.",
          price: 175,
          img: "https://storage.googleapis.com/application-monitoring/plant-to-text.jpg",
          imgcropped:
            "https://storage.googleapis.com/application-monitoring/plant-to-text-cropped.jpg",
        },
        {
          id: 3,
          title: "Plant Stroller",
          description: "Because plant don't have feet.",
          descriptionfull:
            "Look at them little rascals. There are no limits in this world. That easy. Just make a decision and let it go. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. Take your time. Speed will come later.",
          price: 250,
          img: "https://storage.googleapis.com/application-monitoring/plant-spider.jpg",
          imgcropped:
            "https://storage.googleapis.com/application-monitoring/plant-spider-cropped.jpg",
        },
        {
          id: 4,
          title: "Plant Nodes",
          description: "Listen more carefully to your plants.",
          descriptionfull:
            "By now you should be quite happy about what's happening here. Put your feelings into it, your heart, it's your world. Let's get wild today. This is the fun part",
          price: 25,
          img: "https://storage.googleapis.com/application-monitoring/nodes.png",
          imgcropped:
            "https://storage.googleapis.com/application-monitoring/nodes-cropped.jpg",
        },
      ]);
    });
};
