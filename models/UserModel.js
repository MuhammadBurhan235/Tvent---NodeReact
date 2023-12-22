import { Sequelize } from "sequelize";
import tvdb from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = tvdb.define(
  "users",
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_depan: DataTypes.STRING,
    nama_belakang: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    jenis_kelamin: DataTypes.STRING,
    tahun_masuk: DataTypes.STRING,
    nim: DataTypes.STRING,
    fakultas: DataTypes.STRING,
    program_studi: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await tvdb.sync();
})();
