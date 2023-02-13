import { Sequelize } from "sequelize";
import database from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = database.define('users', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama_user : DataTypes.STRING,
    email_user: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.ENUM('Admin', 'Pengguna')
}, {
    freezeTableName: true
});

export default User;

database.sync().then(() => {
    console.log('Users table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
