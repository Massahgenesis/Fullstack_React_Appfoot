module.exports = (sequelize, Sequelize) => {
  const Players = sequelize.define("players", {
    lastName: {
      type: Sequelize.STRING,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INT,
    },
    wins: {
      type: Sequelize.INT,
    },
    losses: {
      type: Sequelize.INT,
    },
    pointsScored: {
      type: Sequelize.INT,
    },
    club: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Players;
};
