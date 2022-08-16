//database credentials
module.exports = {
  HOST: "mysql-gen22sis.alwaysdata.net",
  USER: "gen22sis",
  PASSWORD: "datm@Eg_22",
  DB: "gen22sis_testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
