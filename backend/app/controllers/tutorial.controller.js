const db = require("../models");
const Players = db.players;
const Op = db.Sequelize.Op;

// Create and Save a new player
exports.create = (req, res) => {
  // Validate request
  if (!req.body.lastName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Player
  const players = {
    lastName: req.body.lastName,
    firstName:req.body.firstName,
    age:req.body.age,
    wins:req.body.wins,
    losses:req.body.losses,
    pointsScored:req.body.pointsScored,
    club:req.body.club,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  // const players = {
  //   title: req.body.title,
  //   description: req.body.description,
  //   published: req.body.published ? req.body.published : false,
  // };


  // Save players in the database
  Players.create(players)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the player.",
      });
    });
};

// Retrieve all players from the database.
exports.findAll = (req, res) => {
  const lastName = req.query.lastName;
  var condition = lastName ? { lastName: { [Op.like]: `%${lastName}%` } } : null;

  Players.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving players.",
      });
    });
};

// Find a single Player with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Players.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find player with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Player with id=" + id,
      });
    });
};

// Update a Player by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Players.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Player was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Player with id=" + id,
      });
    });
};

// Delete a Player with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Players.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Player was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Player with id=${id}. Maybe Player was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Player with id=" + id,
      });
    });
};

// Delete all Players from the database.
exports.deleteAll = (req, res) => {
  Players.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Player were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all players.",
      });
    });
};

// find all published Players
exports.findAllPublished = (req, res) => {
  Players.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Players.",
      });
    });
};
