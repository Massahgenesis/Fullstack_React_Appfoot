module.exports = (sequelize, Sequelize) => {
  const Players = sequelize.define("players", {
    lastName: {
      type: Sequelize.STRING,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    wins: {
      type: Sequelize.INTEGER,
    },
    losses: {
      type: Sequelize.INTEGER,
    },
    pointsScored: {
      type: Sequelize.INTEGER,
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
