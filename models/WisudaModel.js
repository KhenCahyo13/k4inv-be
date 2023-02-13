import { Sequelize } from 'sequelize';
import database from '../config/Database.js';
import Seminar from './SeminarModel.js';
import User from './UserModel.js';

const { DataTypes } = Sequelize;

const Wisuda = database.define('wisuda', {
    id_wisuda: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    judul_wisuda: DataTypes.STRING,
    nama_wisuda: DataTypes.STRING,
    tempat: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    jam: DataTypes.TIME
}, {
    freezeTableName: true,
});

User.hasMany(Wisuda);
Wisuda.belongsTo(User);

export default Wisuda;

database.sync().then(() => {
    console.log('Wisuda table created succesfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});