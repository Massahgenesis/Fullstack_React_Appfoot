module.exports = (app) => {
  const Players= require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Player
  router.post("/", Players.create);

  // Retrieve all Players
  router.get("/", Players.findAll);

  // Retrieve all published Players
  router.get("/published", Players.findAllPublished);

  // Retrieve a single Players with id
  router.get("/:id", Players.findOne);

  // Update a Players with id
  router.put("/:id", Players.update);

  // Delete a Players with id
  router.delete("/:id", Players.delete);

  // Delete all Players
  router.delete("/", Players.deleteAll);

  app.use("/api/Players", router);
};
