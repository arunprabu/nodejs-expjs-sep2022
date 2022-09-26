const dbConfig = require("../config/mysql.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
// setting up employees table as well
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.employees = require("./sequelize/employee.model")(sequelize, Sequelize); // making it as usable table
module.exports = db;