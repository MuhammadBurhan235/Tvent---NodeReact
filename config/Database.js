import { Sequelize } from "sequelize";

const tvdb = new Sequelize("tvent_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default tvdb;
